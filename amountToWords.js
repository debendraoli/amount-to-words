/*
* @author github.com/debendraoli
* You are not allowed to remove credit author.
*/

function amountInWords(amount, currencyName='Rupee') {
    var amount_string = amount.toString(); // convert number to string
    if (amount % 1 === 0) amount_string += '.00'; // check and append .00 for non floating number.
    const single = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
    'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ','seventeen ','eighteen ', 'nineteen '];

    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const counts_name = ['', 'kharab', 'arab', 'crore', 'lakh', 'thousand', 'hundred', currencyName, 'paisa']
    if (amount_string.length > 16) return 'overflow.';
    const group_num = ('0000000000000' + amount_string).substr(-16).match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})\.(\d{2})$/);
    if (!group_num) return 'Zero.';
    var words = '';
    words += (group_num[1] != 0) ? (single[Number(group_num[1])] || tens[group_num[1][0]] + ' ' + single[group_num[1][1]]) + counts_name[1] + ' ' : '';
    words += (group_num[2] != 0) ? (single[Number(group_num[2])] || tens[group_num[2][0]] + ' ' + single[group_num[2][1]]) + counts_name[2] + ' ' : '';
    words += (group_num[3] != 0) ? (single[Number(group_num[3])] || tens[group_num[3][0]] + ' ' + single[group_num[3][1]]) + counts_name[3] + ' ' : '';
    words += (group_num[4] != 0) ? (single[Number(group_num[4])] || tens[group_num[4][0]] + ' ' + single[group_num[4][1]]) + counts_name[4] + ' ' : '';
    words += (group_num[5] != 0) ? (single[Number(group_num[5])] || tens[group_num[5][0]] + ' ' + single[group_num[5][1]]) + counts_name[5] + ' ' : '';
    words += (group_num[6] != 0) ? (single[Number(group_num[6])] || tens[group_num[6][0]] + ' ' + single[group_num[6][1]]) + counts_name[6] + ' ' : '';
    words += (group_num[7] != 0) ? ((words != '' && group_num[8] === '00') ? 'and ' : '') + (single[Number(group_num[7])] || tens[group_num[7][0]] + ' ' + single[group_num[7][1]]) + counts_name[7] + 's ' : '';
    words += (group_num[8] != 0) ? ('and ' + single[Number(group_num[8])] || tens[group_num[8][0]] + ' ' + single[group_num[8][1]]) + counts_name[8] + ' ': '';
    words += 'only.'
    words = words.charAt(0).toUpperCase() + words.slice(1); // captilize first word.
    return words;
}