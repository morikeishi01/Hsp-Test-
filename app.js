/* HSP-R App — Pure static, no dependencies */
(function(){
"use strict";

// ── Translation data ──────────────────────────────────────────
var T = {
  en: {
    title: "Highly Sensitive Person Scale - Revised (HSP-R)",
    heroSubtitle: "A contemplative self-assessment",
    instructions: "Please answer each question below by circling the number between 1 = \u201cNot at all\u201d to 7 \u201cExtremely\u201d that describes you best as a person overall. If a question can\u2019t be answered, please just leave it out and move on.",
    translationNote: "",
    viewResults: "View Results",
    startOver: "Start Over",
    notAtAll: "Not at all",
    extremely: "Extremely",
    resultsTitle: "Your Results",
    totalScore: "Total score",
    answered: "Questions answered",
    avgTotal: "Overall average",
    notEnough: "You did not answer any questions. Please go back and answer at least one.",
    groupTable: "Subscale Results",
    group: "Subscale",
    questions: "Items",
    groupTotal: "Total",
    groupAvg: "Average",
    highSensitivity: "Your overall average is above 5, suggesting a tendency towards high sensitivity.",
    notHigh: "Your overall average is 5 or below, which does not cross the threshold of > 5 for high sensitivity tendency.",
    disclaimer: "This score does not represent a precise indication or diagnosis but shows the likely position along a continuum of sensitivity. Individual scores may vary depending on gender, age, cultural background and other characteristics.",
    noData: "Insufficient data",
    questionsList: [
      "1. Do you notice when things have been moved around?",
      "2. Are you easily affected by feedback (both negative and positive)?",
      "3. Are you easily overwhelmed by things like bright lights, strong smells, coarse fabrics, or sirens close by?",
      "4. Do you easily recognise what others are feeling?",
      "5. Do you notice and enjoy delicate or fine scents, tastes, sounds, works of art?",
      "6. Are you easily affected by the mood of people around you?",
      "7. Do you tend to reflect on things deeply?",
      "8. Are you good at anticipating how someone may feel about a situation?",
      "9. Are you bothered by intense stimuli, like loud noises or chaotic scenes?",
      "10. Do you generally react strongly to your experiences, whether you show it or not?",
      "11. Do other people tell you that you are good at understanding what they are feeling or thinking?",
      "12. Do you tend to get deeply immersed in music?",
      "13. Do you find yourself thinking about philosophical questions?",
      "14. Do you seem to notice changes in the weather more than others do?",
      "15. Do you become unpleasantly aroused when a lot is going on around you?",
      "16. Are you deeply moved by the arts or music?",
      "17. Do you tend to notice subtle signs of changing seasons (winter/ spring etc.)?",
      "18. Do you like deep conversations?"
    ],
    groupNames: {
      overstimulation: "Overstimulation",
      positive: "Sensitivity to Positive Experiences",
      social: "Social Sensitivity",
      depth: "Depth of Processing",
      emotional: "Emotional Reactivity",
      details: "Sensitivity to Details"
    },
    footerPrivacy: "All responses are processed locally in your browser. No data is collected or transmitted.",
    footerCopyright: "This questionnaire is protected by copyright. Unauthorized modifications are prohibited. It may be reproduced for personal, clinical, educational, and research purposes when the full citation is provided along with both source links below.",
    footerCitation: "Pluess, M., Aron, E. N., K\u00e4hk\u00f6nen, J. E., Lionetti, F., Huang, Y., Tillmann, T., Greven, C. U., & Aron, A. (2026). Evolution of the Concept of Sensory Processing Sensitivity and its Measurement: The Highly Sensitive Person Scale-Revised. <em>Personality and Individual Differences</em>, 257, 113782. <a href=\"https://doi.org/10.1016/j.paid.2026.113782\" target=\"_blank\" rel=\"noopener\">https://doi.org/10.1016/j.paid.2026.113782</a>"
  },
  ja: {
    title: "\u6539\u8a02\u7248 \u9ad8\u611f\u53d7\u6027\u8005\u5c3a\u5ea6\uff08HSP-R\uff09",
    heroSubtitle: "\u9759\u304b\u306a\u5185\u7701\u306e\u305f\u3081\u306e\u81ea\u5df1\u8a55\u4fa1",
    instructions: "以下の各質問について、1＝まったく当てはまらない、7＝非常に当てはまるの間から、あなた自身全体として最もよく当てはまる数字を選んでください。答えられない質問は飛ばして次に進んでください。",
    translationNote: "※日本語版は翻訳の便宜上作成されたものであり、英語版がオリジナルです。",
    viewResults: "結果を見る",
    startOver: "やり直す",
    notAtAll: "まったく当てはまらない",
    extremely: "非常に当てはまる",
    resultsTitle: "あなたの結果",
    totalScore: "合計スコア",
    answered: "回答済み質問数",
    avgTotal: "全体平均",
    notEnough: "質問に回答されていません。少なくとも1問に回答してから結果を確認してください。",
    groupTable: "下位尺度の結果",
    group: "下位尺度",
    questions: "項目",
    groupTotal: "合計",
    groupAvg: "平均",
    highSensitivity: "あなたの全体平均は5を超えており、高感受性傾向が示唆されます。",
    notHigh: "あなたの全体平均は5以下であり、高感受性傾向の閾値（>5）を上回っていません。",
    disclaimer: "このスコアは精密な診断や確定的な指標ではなく、感受性の連続体上のおおよその位置を示すものです。個人のスコアは性別、年齢、文化的背景、その他の特性によって異なる場合があります。",
    noData: "データ不足",
    questionsList: [
      "1. 物が動かされたことに気づきますか？",
      "2. フィードバック（否定的なものも肯定的なものも）の影響を受けやすいですか？",
      "3. 強い光、強い匂い、粗い生地、近くのサイレンなどによって圧倒されやすいですか？",
      "4. 他人が何を感じているか容易に認識できますか？",
      "5. 繊細な香り、味、音、芸術作品に気づいて喜びを感じますか？",
      "6. 周囲の人々の気分の影響を受けやすいですか？",
      "7. 物事を深く考察する傾向がありますか？",
      "8. 誰かが状況についてどう感じるかを予測するのが得意ですか？",
      "9. 大きな音や混沌とした場面などの強い刺激に不快感を感じますか？",
      "10. 経験に対して全般的に強く反応しますか（見せるかどうかは問わず）？",
      "11. 他人から、彼らの気持ちや考えを理解するのが上手いと言われますか？",
      "12. 音楽に深く没頭する傾向がありますか？",
      "13. 哲学的な問いについて考えることがありますか？",
      "14. 天候の変化に他の人より多く気づきますか？",
      "15. 周囲で多くのことがあると不快な興奮状態になりますか？",
      "16. 芸術や音楽に深く感動しますか？",
      "17. 季節の変化（冬から春など）の微妙な兆しに気づく傾向がありますか？",
      "18. 深い会話を好みますか？"
    ],
    groupNames: {
      overstimulation: "過剰刺激",
      positive: "ポジティブ体験への感受性",
      social: "社会的感受性",
      depth: "処理の深さ",
      emotional: "情緒的反応性",
      details: "詳細への感受性"
    },
    footerPrivacy: "すべての回答はブラウザ内でローカル処理されます。データの収集や送信は行われません。",
    footerCopyright: "この質問集は著作権によって保護されています。無断の変更は禁止されています。完全な引用と以下のソースリンクを提供した場合、個人的・臨床的・教育的・研究目的に複製することができます。",
    footerCitation: "Pluess, M., Aron, E. N., K\u00e4hk\u00f6nen, J. E., Lionetti, F., Huang, Y., Tillmann, T., Greven, C. U., & Aron, A. (2026). Evolution of the Concept of Sensory Processing Sensitivity and its Measurement: The Highly Sensitive Person Scale-Revised. <em>Personality and Individual Differences</em>, 257, 113782. <a href=\"https://doi.org/10.1016/j.paid.2026.113782\" target=\"_blank\" rel=\"noopener\">https://doi.org/10.1016/j.paid.2026.113782</a>"
  },
  vi: {
    title: "Thang đo Người nhạy cảm cao \u2013 Bản sửa đổi (HSP-R)",
    heroSubtitle: "Một bài tự đánh giá nội tâm",
    instructions: "Vui lòng trả lời mỗi câu hỏi bên dưới bằng cách chọn số từ 1 = Hoàn toàn không đến 7 = Cực kỳ phù hợp, mô tả đúng nhất về bạn nói chung. Nếu không thể trả lời câu nào, hãy bỏ qua và chuyển sang câu tiếp theo.",
    translationNote: "Lưu ý: Bản dịch tiếng Việt chỉ để thuận tiện, bản tiếng Anh là nguồn gốc.",
    viewResults: "Xem kết quả",
    startOver: "Làm lại",
    notAtAll: "Hoàn toàn không",
    extremely: "Cực kỳ",
    resultsTitle: "Kết quả của bạn",
    totalScore: "Tổng điểm",
    answered: "Số câu đã trả lời",
    avgTotal: "Điểm trung bình",
    notEnough: "Bạn chưa trả lời câu nào. Vui lòng quay lại và trả lời ít nhất một câu.",
    groupTable: "Kết quả theo nhóm",
    group: "Nhóm",
    questions: "Câu hỏi",
    groupTotal: "Tổng",
    groupAvg: "Trung bình",
    highSensitivity: "Điểm trung bình tổng của bạn lớn hơn 5, cho thấy có xu hướng nhạy cảm cao.",
    notHigh: "Điểm trung bình tổng của bạn từ 5 trở xuống, không vượt ngưỡng > 5 để chỉ xu hướng nhạy cảm cao.",
    disclaimer: "Điểm số này không phải là chẩn đoán hay chỉ báo chính xác mà chỉ thể hiện vị trí ước lượng trên một phổ nhạy cảm. Kết quả có thể khác theo giới tính, tuổi, văn hóa và đặc điểm khác.",
    noData: "Chưa đủ dữ liệu",
    questionsList: [
      "1. Bạn có để ý khi đồ vật bị di chuyển không?",
      "2. Bạn có dễ bị ảnh hưởng bởi phản hồi (cả tiêu cực và tích cực) không?",
      "3. Bạn có dễ bị choáng ngợp bởi ánh sáng mạnh, mùi nồng, vải thô, hoặc tiếng còi báo động ở gần không?",
      "4. Bạn có dễ dàng nhận ra cảm xúc của người khác không?",
      "5. Bạn có để ý và thưởng thức mùi thơm tinh tế, hương vị, âm thanh hoặc tác phẩm nghệ thuật không?",
      "6. Bạn có dễ bị ảnh hưởng bởi tâm trạng của những người xung quanh không?",
      "7. Bạn có xu hướng suy nghĩ sâu sắc về mọi thứ không?",
      "8. Bạn có giỏi dự đoán cảm xúc của ai đó về một tình huống không?",
      "9. Bạn có khó chịu bởi các kích thích mạnh như tiếng ồn lớn hoặc cảnh tượng hỗn loạn không?",
      "10. Nói chung, bạn có phản ứng mạnh với trải nghiệm của mình, dù có thể hiện ra hay không?",
      "11. Người khác có nói rằng bạn giỏi hiểu cảm xúc hoặc suy nghĩ của họ không?",
      "12. Bạn có xu hướng đắm chìm sâu trong âm nhạc không?",
      "13. Bạn có thấy mình suy nghĩ về các câu hỏi triết học không?",
      "14. Bạn có vẻ để ý sự thay đổi thời tiết nhiều hơn người khác không?",
      "15. Bạn có trở nên khó chịu khi xung quanh có quá nhiều thứ đang diễn ra không?",
      "16. Bạn có bị xúc động sâu sắc bởi nghệ thuật hoặc âm nhạc không?",
      "17. Bạn có xu hướng để ý các dấu hiệu tinh tế của sự thay đổi mùa (đông/xuân…) không?",
      "18. Bạn có thích các cuộc trò chuyện sâu sắc không?"
    ],
    groupNames: {
      overstimulation: "Quá tải giác quan",
      positive: "Nhạy cảm với trải nghiệm tích cực",
      social: "Nhạy cảm xã hội",
      depth: "Độ sâu xử lý",
      emotional: "Phản ứng cảm xúc",
      details: "Nhạy cảm với chi tiết"
    },
    footerPrivacy: "Tất cả câu trả lời chỉ được xử lý cục bộ trong trình duyệt của bạn. Không thu thập hay gửi dữ liệu.",
    footerCopyright: "Bản câu hỏi này được bảo vệ bản quyền. Không được sửa đổi trái phép. Được tái tạo cho mục đích cá nhân, lâm sàng, giáo dục và nghiên cứu khi trích dẫn đầy đủ và cung cấp hai link nguồn bên dưới.",
    footerCitation: "Pluess, M., Aron, E. N., K\u00e4hk\u00f6nen, J. E., Lionetti, F., Huang, Y., Tillmann, T., Greven, C. U., & Aron, A. (2026). Evolution of the Concept of Sensory Processing Sensitivity and its Measurement: The Highly Sensitive Person Scale-Revised. <em>Personality and Individual Differences</em>, 257, 113782. <a href=\"https://doi.org/10.1016/j.paid.2026.113782\" target=\"_blank\" rel=\"noopener\">https://doi.org/10.1016/j.paid.2026.113782</a>"
  }
};

// ── Subscale definitions ──────────────────────────────────────
var GROUPS = [
  { key: "overstimulation",  items: [3, 9, 15] },
  { key: "positive",         items: [5, 12, 16] },
  { key: "social",           items: [4, 8, 11] },
  { key: "depth",            items: [7, 13, 18] },
  { key: "emotional",        items: [2, 6, 10] },
  { key: "details",          items: [1, 14, 17] }
];

// ── State ─────────────────────────────────────────────────────
var lang = "en";
var answers = {};
var cardObserver = null;
var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ── DOM refs ──────────────────────────────────────────────────
var $title        = document.getElementById("title");
var $instructions = document.getElementById("instructions");
var $transNote    = document.getElementById("translation-note");
var $heroSubtitle = document.getElementById("hero-subtitle");
var $progressBar  = document.getElementById("progressBar");
var $progressText = document.getElementById("progressText");
var $quiz         = document.getElementById("quiz");
var $btnResult    = document.getElementById("btnResult");
var $btnReset     = document.getElementById("btnReset");
var $results      = document.getElementById("results");
var $langBtns     = document.querySelectorAll(".lang-switch button");
var $copyright    = document.getElementById("copyright");
var $disclaimer   = document.getElementById("disclaimer");
var $citation     = document.getElementById("citation");
var $progressCon  = document.querySelector(".progress-bar-container");

// ── Render quiz ───────────────────────────────────────────────
function renderQuiz() {
  var t = T[lang];
  var html = "";
  for (var i = 0; i < 18; i++) {
    var qNum = i + 1;
    html += '<fieldset class="question-card">';
    html += '<legend class="q-text">' + t.questionsList[i] + '</legend>';
    html += '<div class="scale">';
    html += '<span class="scale-label">' + t.notAtAll + '</span>';
    html += '<div class="scale-options">';
    for (var s = 1; s <= 7; s++) {
      var checked = answers[qNum] === s ? " checked" : "";
      var ariaDesc = t.questionsList[i] + " \u2013 " + s + " / 7";
      html += '<label>';
      html += '<input type="radio" name="q' + qNum + '" value="' + s + '"' + checked + ' aria-label="' + ariaDesc + '">';
      html += '<span class="num">' + s + '</span>';
      html += '</label>';
    }
    html += '</div>';
    html += '<span class="scale-label">' + t.extremely + '</span>';
    html += '</div>';
    html += '</fieldset>';
  }
  $quiz.innerHTML = html;
  setupCardReveal();
}

// ── Update static text ────────────────────────────────────────
function updateText() {
  var t = T[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  $title.textContent = t.title;
  $instructions.textContent = t.instructions;
  $transNote.textContent = t.translationNote;
  if ($heroSubtitle) $heroSubtitle.textContent = t.heroSubtitle;
  $btnResult.textContent = t.viewResults;
  $btnReset.textContent = t.startOver;
  $btnResult.setAttribute("aria-label", t.viewResults);
  $btnReset.setAttribute("aria-label", t.startOver);
  var progressLabel = t.answered + ": " + Object.keys(answers).length + " / 18";
  $progressCon.setAttribute("aria-label", progressLabel);
  $copyright.textContent = t.footerCopyright;
  $disclaimer.textContent = t.footerPrivacy;
  $citation.innerHTML = t.footerCitation;
}

// ── Wire language buttons ─────────────────────────────────────
$langBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    lang = btn.getAttribute("data-lang");
    $langBtns.forEach(function(b) { b.classList.remove("active"); });
    btn.classList.add("active");
    updateText();
    renderQuiz();
    $results.classList.add("hidden");
  });
});

// ── Track answers via event delegation ────────────────────────
$quiz.addEventListener("change", function(e) {
  if (e.target.type === "radio") {
    var qNum = parseInt(e.target.name.substring(1), 10);
    answers[qNum] = parseInt(e.target.value, 10);
    updateProgress();
  }
});

function updateProgress() {
  var count = Object.keys(answers).length;
  var pct = Math.round(count / 18 * 100);
  $progressBar.style.width = pct + "%";
  $progressText.textContent = count + " / 18";
  var t = T[lang];
  $progressCon.setAttribute("aria-label", t.answered + ": " + count + " / 18");
}

// ── Compute overall ───────────────────────────────────────────
function compute() {
  var total = 0;
  var count = 0;
  for (var q in answers) {
    if (answers.hasOwnProperty(q)) {
      total += answers[q];
      count++;
    }
  }
  return {
    total: total,
    answered: count,
    avg: count > 0 ? (total / count).toFixed(2) : null
  };
}

// ── Compute subscale ──────────────────────────────────────────
function computeGroup(key) {
  var group = null;
  for (var g = 0; g < GROUPS.length; g++) {
    if (GROUPS[g].key === key) { group = GROUPS[g]; break; }
  }
  if (!group) return { total: null, avg: null, count: 0 };
  var total = 0;
  var count = 0;
  for (var i = 0; i < group.items.length; i++) {
    var q = group.items[i];
    if (answers[q] !== undefined) {
      total += answers[q];
      count++;
    }
  }
  if (count === 0) return { total: null, avg: null, count: 0 };
  return { total: total, avg: (total / count).toFixed(2), count: count };
}

// ── Show results ──────────────────────────────────────────────
$btnResult.addEventListener("click", function() {
  var t = T[lang];
  var r = compute();

  if (r.answered === 0) {
    $results.innerHTML = '<div class="error">' + t.notEnough + '</div>';
    $results.classList.remove("hidden");
    $results.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    return;
  }

  var html = '<h2>' + t.resultsTitle + '</h2>';
  html += '<div class="summary">';
  html += t.totalScore + ': <strong>' + r.total + '</strong><br>';
  html += t.answered + ': <strong>' + r.answered + ' / 18</strong><br>';
  html += t.avgTotal + ': <strong>' + r.avg + '</strong>';
  html += '</div>';

  if (parseFloat(r.avg) > 5) {
    html += '<p class="high" style="text-align:center;margin-bottom:1rem">' + t.highSensitivity + '</p>';
  } else {
    html += '<p class="low" style="text-align:center;margin-bottom:1rem">' + t.notHigh + '</p>';
  }

  html += '<h3 style="text-align:center;margin-bottom:.75rem">' + t.groupTable + '</h3>';
  html += '<table><thead><tr>';
  html += '<th>' + t.group + '</th>';
  html += '<th>' + t.questions + '</th>';
  html += '<th>' + t.groupTotal + '</th>';
  html += '<th>' + t.groupAvg + '</th>';
  html += '</tr></thead><tbody>';

  for (var g = 0; g < GROUPS.length; g++) {
    var grp = GROUPS[g];
    var gr = computeGroup(grp.key);
    html += '<tr>';
    html += '<td>' + t.groupNames[grp.key] + '</td>';
    html += '<td>' + grp.items.join(", ") + '</td>';
    if (gr.count === 0) {
      html += '<td colspan="2">' + t.noData + '</td>';
    } else {
      html += '<td>' + gr.total + '</td>';
      html += '<td>' + gr.avg + '</td>';
    }
    html += '</tr>';
  }

  html += '</tbody></table>';
  html += '<p class="note">' + t.disclaimer + '</p>';

  $results.innerHTML = html;
  $results.classList.remove("hidden");
  $results.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
});

// ── Reset ─────────────────────────────────────────────────────
$btnReset.addEventListener("click", function() {
  answers = {};
  updateProgress();
  renderQuiz();
  $results.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

// ── Init ──────────────────────────────────────────────────────
updateText();
renderQuiz();
updateProgress();
initMotionEnhancements();

// ── Motion Enhancements ──────────────────────────────────────
function initMotionEnhancements() {
  // Pointer-following aura — desktop fine-pointer only
  if (!prefersReducedMotion) {
    var aura = document.querySelector(".pointer-aura");
    if (aura && window.matchMedia("(pointer: fine)").matches) {
      var auraRaf = null;
      var auraX = -400, auraY = -400;

      document.addEventListener("mousemove", function(e) {
        auraX = e.clientX;
        auraY = e.clientY;
        if (!auraRaf) {
          auraRaf = requestAnimationFrame(function() {
            aura.style.left = auraX + "px";
            aura.style.top = auraY + "px";
            aura.classList.add("active");
            auraRaf = null;
          });
        }
      });

      document.addEventListener("mouseleave", function() {
        aura.classList.remove("active");
      });
    }
  }

  // Re-trigger result reveal animation when results section content changes
  var resultsObserver = new MutationObserver(function() {
    if (!$results.classList.contains("hidden")) {
      $results.style.animation = "none";
      void $results.offsetHeight;
      $results.style.animation = "";
    }
  });
  resultsObserver.observe($results, { childList: true });
}

function setupCardReveal() {
  // Disconnect any previous observer
  if (cardObserver) {
    cardObserver.disconnect();
    cardObserver = null;
  }

  var cards = $quiz.querySelectorAll(".question-card");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    showAllCards();
    return;
  }

  cardObserver = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("card-visible");
        cardObserver.unobserve(entries[i].target);
      }
    }
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  for (var i = 0; i < cards.length; i++) {
    cardObserver.observe(cards[i]);
  }
}

function showAllCards() {
  var cards = $quiz.querySelectorAll(".question-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.add("card-visible");
  }
}

})();
