/**
 * פונקציה לניהול השבתת שדות לפי בחירת המסלול
 */
function handleDisable() {
    var psychRadio = document.getElementById("psychTrack");
    var mechinaRadio = document.getElementById("mechinaTrack");
    
    var psychInput = document.getElementById("psychGrade");
    var mechinaInput = document.getElementById("mechinaGrade");

    if (psychRadio.checked) {
        // אם נבחר פסיכומטרי - בטל מכינה
        mechinaInput.disabled = true;
        mechinaInput.value = ""; 
        psychInput.disabled = false;
    } 
    else if (mechinaRadio.checked) {
        // אם נבחר מכינה - בטל פסיכומטרי
        psychInput.disabled = true;
        psychInput.value = ""; 
        mechinaInput.disabled = false;
    }
}

/**
 * פונקציית התיקוף המרכזית
 */
function validate() {
    var age = document.getElementById("age").value;
    var bagrut = document.getElementById("bagrutGrade").value;
    var statusDiv = document.getElementById("statusMessage");

    // 1. ניקוי הודעות קודמות
    statusDiv.innerHTML = "";
    statusDiv.className = "";

    // 2. בדיקת ציון בגרות (חובה)
    if (bagrut === "") {
        alert("You should enter a bagrut grade");
        return; 
    }

    // 3. בדיקת גיל מעל 30 להצגת הודעה ירוקה על המסך
    if (Number(age) > 30) {
        statusDiv.innerHTML = "You are eligible for admission to any faculty you choose";
        statusDiv.className = "green";
    }

    
    alert("details are sent");
}