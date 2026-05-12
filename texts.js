// קובץ זה מכיל את כל הטקסטים הארוכים שיוצגו בחלונות הקופצים (Popups).
// ניתן לערוך את הטקסט שבין המירכאות מתי שרוצים.

const contentTexts = {
    // טקסט קרא עוד עבור Fractional CFO
    cfo: `
        <h3 class="text-2xl font-bold text-primary-green mb-4">Fractional CFO</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
            בתפקיד של Fractional CFO (CFO במיקור חוץ), אני נכנס לארגונים בשלבי צמיחה או שינוי כגון Scale-up, פרה/פוסט M&A או שינוי בעלי תפקידים, ומביא מנהיגות פיננסית בכירה ללא הצורך בהתחייבות של משרה מלאה.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
            המטרה היא לא רק "לסדר את המספרים", אלא לייצר תשתית שתומכת באסטרטגיית החברה. זה כולל בניית מודלים פיננסיים, ניהול הדוק של תזרים מזומנים, הגדרת מדדי מפתח (KPIs) ברורים, והכנה מיטבית של החברה לעמידה מול משקיעים או ועדות השקעה, או לתהליכי בדיקת נאותות (Due Diligence).
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
            הגישה שלי משלבת ראייה מערכתית ברמת הדירקטוריון יחד עם מוכנות להפשיל שרוולים (Hands-on) ולהקים מחלקת כספים מאפס בעת הצורך. הכל כדי לתת למנכ"ל את השקט הנפשי הדרוש לנהל את העסק.
        </p>
        <p class="text-gray-700 leading-relaxed font-medium">
            כמנכ"ל או בעל עסק, אתה מקבל קפיצת מדרגה בת-קיימא בניהול החברה, חוסנה, ואפשרויות הצמיחה שלה. אך יותר מהכול, שקט, ודאות, ושותף אמיתי לחשיבה עסקית.
        </p>
        
        <div class="mt-8 text-center border-t border-gray-100 pt-6">
            <p class="text-gray-700 font-medium mb-4">נשמע מעניין? בואו נבדוק יחד אם זה מתאים.</p>
            <a href="https://wa.me/972545588641?text=שלום%20בן%2C%20הגעתי%20מהאתר%20ואשמח%20להתייעץ%20איתך%20לגבי%20שירות%20Fractional%20CFO." target="_blank" class="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#25D366] hover:bg-[#20b858] transition shadow-md w-full sm:w-auto">
                לשליחת הודעת ווטסאפ אישית
            </a>
        </div>
    `,

    // טקסט קרא עוד עבור מנטורינג
    mentoring: `
        <h3 class="text-2xl font-bold text-accent-green mb-6">מנטורינג למנהלים: הופכים דוחות למנהיגות</h3>
        
        <p class="text-lg text-primary-green font-medium mb-6 leading-relaxed">
            אני מלווה מנהלי כספים בתהליך קצר ומובנה שהופך אותם מ"אנשי דוחות" לשותפים עסקיים ומנהיגים בארגון.
        </p>
        
        <h4 class="text-lg font-bold text-gray-900 mb-3">מה אנחנו עושים בפועל?</h4>
        <ul class="list-disc pr-5 mb-6 text-gray-700 space-y-2">
            <li>תיאום ציפיות, הגדרת יעדים לעבודה ונושאים עיקריים</li>
            <li>ליווי אישי של מנהל הכספים ושל מחלקת הכספים לאור המשימות והתפקוד הנדרש</li>
            <li>נקודות בקרה ומדדים להבטחת התקדמות</li>
        </ul>

        <h4 class="text-lg font-bold text-gray-900 mb-3">מה יוצא לנו?</h4>
        <p class="text-gray-700 leading-relaxed mb-8 bg-green-50 p-4 rounded-lg border-r-4 border-accent-green">
            התוצאה: הצלחת מנהל הכספים / ה - CFO, שקט ניהולי, ויצירת בסיס פיננסי איתן לחברה.
        </p>

        <h4 class="text-lg font-bold text-gray-900 mb-3">הצעד הבא</h4>
        <p class="text-gray-700 leading-relaxed">
            בואו נבדוק יחד אם זה יכול להתאים אצלכם – בשיחה קצרה ללא התחייבות.
        </p>

        <div class="mt-8 text-center border-t border-gray-100 pt-6">
            <p class="text-gray-700 font-medium mb-4">נשמע מעניין? בואו נבדוק יחד אם זה מתאים.</p>
            <a href="https://wa.me/972545588641?text=שלום%20בן%2C%20הגעתי%20מהאתר%20ואשמח%20לשמוע%20פרטים%20על%20תהליך%20מנטורינג%20למנהלים." target="_blank" class="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#25D366] hover:bg-[#20b858] transition shadow-md w-full sm:w-auto">
                לשליחת הודעת ווטסאפ אישית
            </a>
        </div>
    `,

    // טקסט קרא עוד עבור אימון אישי
    coaching: `
        <h3 class="text-2xl font-bold text-primary-green mb-4">הרחבה: אימון אישי לצמיחה</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
            האימון האישי נולד מתוך ההבנה שאי אפשר להפריד בין "המנהל" לבין "האדם". הצלחה עסקית ארוכת טווח נשענת על בסיס אישי יציב, על מיקוד, ועל סילוק חסמים פנימיים.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
            בתהליך האימון אנו מייצרים מרחב בטוח ושקט לחשיבה. אנו ממפים את הצמתים המשמעותיים, מזהים אילו אמונות או דפוסים מעכבים את הפריצה הבאה, ומייצרים תוכנית פעולה בהירה.
        </p>
        <p class="text-gray-700 leading-relaxed">
            האימון מתאים לא רק למנהלי כספים, אלא לכל מי שנמצא בצומת דרכים בקריירה או בחיים, חווה תחושת תקיעות, או פשוט מבקש לייצר הלימה מדויקת יותר בין הערכים שלו לבין העשייה היומיומית שלו בדרך להגשמה.
        </p>

        <div class="mt-8 text-center border-t border-gray-100 pt-6">
            <p class="text-gray-700 font-medium mb-4">נשמע מעניין? בואו נבדוק יחד אם זה מתאים.</p>
            <a href="https://wa.me/972545588641?text=שלום%20בן%2C%20הגעתי%20מהאתר%20ואשמח%20לפרטים%20על%20תהליך%20האימון%20האישי." target="_blank" class="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#25D366] hover:bg-[#20b858] transition shadow-md w-full sm:w-auto">
                לשליחת הודעת ווטסאפ אישית
            </a>
        </div>
    `
};