/*Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */
function accum(s) {
    return s.toLowerCase().split('').map((x,i) => x.toUpperCase() + x.repeat(i)).join('-')
    }