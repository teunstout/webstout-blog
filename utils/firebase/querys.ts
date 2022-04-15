import {
    collection,
    DocumentData,
    Firestore,
    limit,
    orderBy,
    query,
    startAfter,
} from "firebase/firestore";

export const getAlbumsPagination = (firestore: Firestore, lim: number, start?: DocumentData) =>
    start
        ? query(
              collection(firestore, "albums"),
              orderBy("createdAt"),
              startAfter(start),
              limit(lim)
          )
        : query(collection(firestore, "albums"), orderBy("createdAt"), limit(lim));
