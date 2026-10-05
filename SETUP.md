# خطوات التشغيل (حوالي ١٠ دقايق)

## ١) Firebase (مجاني)
1. ادخل console.firebase.google.com واعمل مشروع جديد.
2. **Build > Firestore Database > Create database** (اختار أي منطقة، وابدأ بـ production mode).
3. **Build > Authentication > Sign-in method** فعّل **Email/Password**، وبعدين من **Users** ضيف ٣ مستخدمين (لازم تضيف `ammaresmohamed100@gmail.com` بنفس الباسورد اللي هتدخل بيه).
4. **Firestore > Rules**: انسخ محتوى `firestore.rules`، وتأكد إن إيميلك (`ammaresmohamed100@gmail.com`) وإيميلات باقي الشركاء مكتوبين في القائمة، واضغط **Publish**.
5. **Project settings > Your apps > Web (</>)**: سجّل تطبيق ويب وانسخ `firebaseConfig`، وحطه في `firebase-config.js`.
6. **Authentication > Settings > Authorized domains**: ضيف `ammaresmohamed100-hub.github.io`.

   - لتفعيل الدخول بجوجل: Sign-in method > Google > Enable. (Apple اختياري ويحتاج حساب Apple Developer مدفوع).

## ٢) Paymob (للبطاقة)
1. من لوحة Paymob اعمل **Payment Link** لدفع البطاقة.
2. حط الرابط في `PAYMOB_LINK` داخل `firebase-config.js`.
3. المفاتيح السرية (Secret / HMAC) **ماتتحطش في الموقع أبداً**.

## ٣) الرفع
ارفع الملفات كلها على نفس الريبو في GitHub (index.html و pay.html و firebase-config.js)، واستبدل القديم.
- رابط العميل: `.../PAYmohamed/pay.html` (ده الوحيد اللي تبعته للعملاء).
- رابط الشركاء: `.../PAYmohamed/` (بالإيميل وكلمة السر).

## ملاحظات
- أي طلب جديد من عميل بيظهر عند الثلاثة "بانتظار التأكيد"، وماينحسبش في الإجمالي إلا بعد ما شريك يدوس **تأكيد الاستلام**.
- أكّد دايماً من رسالة SMS أو تطبيق المحفظة قبل التأكيد، مش من صورة العميل.
- في MacroDroid: خلّي الفلتر على رسائل "تم استلام" بس، وماتحوّلش رسائل فيها كود تحقق (OTP).
