
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection,query, doc, getDocs, setDoc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

//Retrieve and send data to firebase
export async function getStudents(){
const q = query(collection(db, "students"));
const querySnapshot = await getDocs(q);
const arrayOfData = []
querySnapshot.forEach((doc) => {
  const data = {student_id: doc.id,
  name: doc.data().name,
  dateOfBirth: doc.data().dateOfBirth,
  email: doc.data().email,
  address: doc.data().address,
  classes: doc.data().classes
  }
  
  arrayOfData.push(data)
  
});
return arrayOfData;
}


export async function getStudentById(studentId){
  const docRef = doc(db, "students", studentId);
  const docSnap = await getDoc(docRef); 
  return docSnap.data()    
}


export async function addStudent(data){
  const date = new Date();
  const timestamp = new Date().getTime().toString();
  await setDoc(doc(db, "students", timestamp), {
    name: data.name,
    dateOfBirth: data.dateOfBirth,
    email: data.email,
    address: data.address
  });
}
async function amendStudent(studentId){

}

async function deleteStudent(studentId){

}

