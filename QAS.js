let questions = [
    { question: "ما هو أول مسجد بني في الإسلام؟", answer: "مسجد قباء" },
    { question: "من هو النبي الذي ابتلعه الحوت؟", answer: "النبي يونس عليه السلام" },
    { question: "كم عدد سور القرآن الكريم؟", answer: "١١٤ سورة" },
    { question: "ما هي السورة التي تعادل ثلث القرآن؟", answer: "سورة الإخلاص" },
    { question: "من هو الصحابي الملقب بالفاروق؟", answer: "عمر بن الخطاب رضي الله عنه" },
    { question: "ما هو الركن الأول من أركان الإسلام؟", answer: "الشهادتان" },
    { question: "في أي شهر أنزل القرآن الكريم؟", answer: "شهر رمضان" },
    { question: "كم عدد أركان الإسلام؟", answer: "خمسة أركان" },
    { question: "من هو خاتم الأنبياء؟", answer: "النبي محمد صلى الله عليه وسلم" },
    { question: "ما هو الاسم الآخر لسورة الفاتحة؟", answer: "أم الكتاب" },
    { question: "كم عدد الصلوات المفروضة في اليوم والليلة؟", answer: "خمس صلوات" },
    { question: "من هو أول خليفة في الإسلام؟", answer: "أبو بكر الصديق رضي الله عنه" },
    { question: "ما هو أول بيت وضع للناس؟", answer: "الكعبة المشرفة" },
    { question: "من هو الصحابي الذي لقب بأسد الله؟", answer: "حمزة بن عبد المطلب رضي الله عنه" },
    { question: "ما هي أطول سورة في القرآن الكريم؟", answer: "سورة البقرة" },
    { question: "من هو أول نبي كتب بيده؟", answer: "نبي الله إدريس عليه السلام" },
    { question: "ما هي أقصر سورة في القرآن؟", answer: "سورة الكوثر" },
    { question: "كم عدد كلمات شهادة التوحيد؟", answer: "سبع كلمات" },
    { question: "ما هو اسم والدة النبي محمد صلى الله عليه وسلم؟", answer: "آمنة بنت وهب" }
];


let accordionContainer = document.querySelector("#accordionExample");

let accordionContent = questions.map((item, index) => `
        <div class="accordion-item mb-4 text-end shadow-sm border-2">
            <h2 class="accordion-header Ar-dir" id="heading${index}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapse${index}" 
                    aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
                    ${item.question}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
                aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                <div class="accordion-body fs-14">
                    ${item.answer}
                </div>
            </div>
        </div>
    `).join('');

accordionContainer.innerHTML = accordionContent;
