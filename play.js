
const jokes = [
    "😂 مرة آيس كريم وقع من الدور الرابع قال: الحسوووووووووني.",
    "🍪 مرة اتنين دخلو سوبر ماركت، واحد اشتري بسكوت... والتاني اشتري بكلام.",
    "⚽ مرة حلة رز شاطت جابت جون: نينينينينيني!",
    "🔥 مرة لاعب شاط والتاني اتحرق.ا.",
    "💔 بيقولك مرة واحد بيسأل رُمانة: زعلانة ليه؟ قالتله: عشان الناس عمالة تفرط فيا.",
    "➗ مرة مدرس رياضيات عمل حادثة قالوله فيه كسور كتير... قالهم: وحدوا المقامات!",
    "👶 مرة واحد اسمه نادر اتجوز واحدة اسمها نادرة... جابوا ولد سموه مهدد بالانقراض! نينينينيني.",
    "📐 مرة واحدة اسمها ساندي دخلت كلية هندسة بقى اسمها: ساندي متر مربع.",
    "🦟 مرة واحد أقرع نموسة وقفت على راسه... اتزحلقت.",
    "☀️ مرة واحدة اسمها ندى وقفت في الشمس... اتبخرت.",
    "👴 مرة واحد قال نكتة قديمة... طلع من بوقه تراب!",
    // هتفضل الرسالة دي تطلع لحد ما يضغط آخر مرة عشان تطلع رسالة الوداع
    "😆 نكتة إضافية أخيرة للتأكيد... اضغط كمان مرة عشان تشوف رسالة النهاية!" 
];

// 2. منطق عداد النكت
let jokeIndex = 0;

const MAX_JOKES = jokes.length - 1; 


const jokeOutput = document.getElementById('joke-output');
const generateBtn = document.getElementById('generate-btn');


const displayNextJoke = () => {
    // الشرط: لو وصلنا لآخر نكتة بعد العرض الفعلي للنكت
    if (jokeIndex >= MAX_JOKES) {
        // رسالة النهاية والوداع
        jokeOutput.innerHTML = `
            <div style="font-weight: bold; color: #5D3FD3; line-height: 1.5;">
                🛑 **خلاص!** كده خلصنا كل النكت بتاعتنا (${MAX_JOKES} نكت).<br>
                أتمنى تكون **انبسطت وضحكت** من قلبك! 👋
            </div>
        `;
        generateBtn.disabled = true;
        generateBtn.innerText = 'الضحك خلص! إلى اللقاء! 😉';
        return; 
    }

    // عرض النكتة الحالية
    jokeOutput.innerText = jokes[jokeIndex];

    // زيادة العداد للمرة القادمة
    jokeIndex++;

    //  تحديث نص الزر
    if (jokeIndex <= MAX_JOKES) {
        const remaining = MAX_JOKES - jokeIndex;
        generateBtn.innerText = remaining === 0 
            ? `آخر نكتة! يالا بينا نختم بضحكة!` 
            : `النكتة رقم ${jokeIndex + 1} (فاضل ${remaining})`;
    } 
};


document.addEventListener('DOMContentLoaded', () => {
    
    displayNextJoke(); 
    
    
    generateBtn.addEventListener('click', displayNextJoke);
});