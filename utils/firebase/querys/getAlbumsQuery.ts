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

export const getAlbumsQuery = (firestore: Firestore, lim: number, start?: string) =>
    start
        ? query(
              collection(firestore, FirebaseEnum.albums),
              orderBy("createdAt", "desc"),
              startAfter(start),
              limit(lim)
          )
        : query(
              collection(firestore, FirebaseEnum.albums),
              orderBy("createdAt", "desc"),
              limit(lim)
          );
