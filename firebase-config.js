// الصق هنا إعدادات مشروع Firebase (Project settings > Your apps > Web app)
// دي إعدادات عامة وآمنة، الحماية الحقيقية في ملف firestore.rules
import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {getFirestore} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import {getAuth} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  appId: "PASTE_HERE"
};

// رابط الدفع بالبطاقة من لوحة Paymob (Payment Links). سيبه فاضي لإخفاء خيار البطاقة.
export const PAYMOB_LINK = "";
export const INSTAPAY_LINK = "https://ipn.eg/S/mohamedmostafa4144/instapay/2w65oB";
export const INSTAPAY_ID = "mohamedmostafa4144@instapay";
export const RECEIVING = "01039261108";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
