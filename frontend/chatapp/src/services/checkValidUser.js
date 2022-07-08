import  { collection, query, where, getDocs } from "firebase/firestore";

export default async function checkValidUser (db, userEmail) {
    let userAuthorized = false;
    const permissionCollectionRef = collection(db, "Permissions"); //collection reference
    const q = query(permissionCollectionRef)
    // console.log("Permissions from Firestore", permissionCollection);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if(userEmail === doc.id){
            userAuthorized = true
        }
    })
    return userAuthorized;
}