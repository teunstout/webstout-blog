import {
    collection,
    DocumentData,
    Firestore,
    limit,
    orderBy,
    query,
    startAfter,
} from "firebase/firestore";
import { FirebaseEnum } from "../../enums/firebase";

export const getAlbumsQuery = (firestore: Firestore, lim: number, start?: DocumentData) =>
    start
        ? query(
              collection(firestore, FirebaseEnum.albums),
              orderBy("createdAt"),
              startAfter(start),
              limit(lim)
          )
        : query(collection(firestore, FirebaseEnum.albums), orderBy("createdAt"), limit(lim));
