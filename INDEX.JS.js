let year = parseInt(prompt("Nhập năm"))
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert("Năm nhuận")
        } else {
            alert("Không phải năm nhuận")
        }
    } else {
        alert("Năm nhuận")
    }
} else {
    alert("Không phải năm nhuận")
}

