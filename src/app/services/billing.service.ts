import { Injectable } from '@angular/core';
import { AngularFirestore, 
  AngularFirestoreCollection, 
  AngularFirestoreDocument, 
  DocumentReference 
} from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export interface Billing {
  id?: string,
  item: string,
  value: number,
  date: Date,
  dweller: string
}

export class BillingService {
  private billings: Observable<Billing[]>;
  private billingCollection: AngularFirestoreCollection<Billing>;

  constructor(private afs: AngularFirestore) {
    this.billingCollection = this.afs.collection<Billing>('billing');
    this.billings = this.billingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    );
  }


  getBillings(): Observable<Billing[]> {
    return this.billings;
  }


  getBilling(id: string): Observable<Billing> {
    return this.billingCollection.doc<Billing>(id).valueChanges().pipe(
      take(1),
      map(billing => {
        billing.id = id;
        return billing;
      })
    );
  }


  addBilling(billing: Billing): Promise<DocumentReference> {
    return this.billingCollection.add(billing);
  }

  updateBilling(billing: Billing): Promise<void> {
    return this.billingCollection
      .doc(billing.id).update({ 
        item: billing.item, value: billing.value 
      });
  }


  deleteBilling(id: string): Promise<void> {
    return this.billingCollection.doc(id).delete();
  }
}
