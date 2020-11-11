var ANSI = new Object();
ANSI.ESC = "";                     /* ESC      */
ANSI.CSI = ANSI.ESC+"[";
ANSI.BLK = ANSI.ESC+"[30m";          /* Black    */
ANSI.RED = ANSI.ESC+"[31m";          /* Red      */
ANSI.GRN = ANSI.ESC+"[32m";          /* Green    */
ANSI.YEL = ANSI.ESC+"[33m";          /* Yellow   */
ANSI.BLU = ANSI.ESC+"[34m";          /* Blue     */
ANSI.MAG = ANSI.ESC+"[35m";          /* Magenta  */
ANSI.CYN = ANSI.ESC+"[36m";          /* Cyan     */
ANSI.WHT = ANSI.ESC+"[37m";          /* White    */

                /*   Hi Intensity Foreground Colors   */

ANSI.HIR = ANSI.ESC+"[1;31m";        /* Red      */
ANSI.HIG = ANSI.ESC+"[1;32m";        /* Green    */
ANSI.HIY = ANSI.ESC+"[1;33m";        /* Yellow   */
ANSI.HIB = ANSI.ESC+"[1;34m";        /* Blue     */
ANSI.HIM = ANSI.ESC+"[1;35m";        /* Magenta  */
ANSI.HIC = ANSI.ESC+"[1;36m";        /* Cyan     */
ANSI.HIW = ANSI.ESC+"[1;37m";        /* White    */

                /* High Intensity Background Colors  */

ANSI.HBRED = ANSI.ESC+"[41;1m";       /* Red      */
ANSI.HBGRN = ANSI.ESC+"[42;1m";       /* Green    */
ANSI.HBYEL = ANSI.ESC+"[43;1m";       /* Yellow   */
ANSI.HBBLU = ANSI.ESC+"[44;1m";       /* Blue     */
ANSI.HBMAG = ANSI.ESC+"[45;1m";       /* Magenta  */
ANSI.HBCYN = ANSI.ESC+"[46;1m";       /* Cyan     */
ANSI.HBWHT = ANSI.ESC+"[47;1m";       /* White    */

                /*  Background Colors  */

ANSI.BBLK = ANSI.ESC+"[40m";          /* Black    */
ANSI.BRED = ANSI.ESC+"[41m";          /* Red      */
ANSI.BGRN = ANSI.ESC+"[42m";          /* Green    */
ANSI.BYEL = ANSI.ESC+"[43m";          /* Yellow   */
ANSI.BBLU = ANSI.ESC+"[44m";          /* Blue     */
ANSI.BMAG = ANSI.ESC+"[45m";          /* Magenta  */
ANSI.BCYN = ANSI.ESC+"[46m";          /* Cyan     */
ANSI.BWHT = ANSI.ESC+"[47m";          /* White    */

ANSI.NOR = ANSI.ESC+"[2;37;0m"      /* Puts everything back to normal */


ANSI.init = function() {

}

module.exports = ANSI; 
