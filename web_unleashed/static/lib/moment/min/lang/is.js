// moment.js language configuration
// language : icelandic (is)
// author : Hinrik Örn Sigurðsson : https://github.com/hinrik
!function(){function e(e){function t(e){return 11===e%100?!0:1===e%10?!1:!0}function a(e,a,n,_){var s=e+" ";switch(n){case"s":return a||_?"nokkrar sek\xfandur":"nokkrum sek\xfandum";case"m":return a?"m\xedn\xfata":"m\xedn\xfatu";case"mm":return t(e)?s+(a||_?"m\xedn\xfatur":"m\xedn\xfatum"):a?s+"m\xedn\xfata":s+"m\xedn\xfatu";case"hh":return t(e)?s+(a||_?"klukkustundir":"klukkustundum"):s+"klukkustund";case"d":return a?"dagur":_?"dag":"degi";case"dd":return t(e)?a?s+"dagar":s+(_?"daga":"d\xf6gum"):a?s+"dagur":s+(_?"dag":"degi");case"M":return a?"m\xe1nu\xf0ur":_?"m\xe1nu\xf0":"m\xe1nu\xf0i";case"MM":return t(e)?a?s+"m\xe1nu\xf0ir":s+(_?"m\xe1nu\xf0i":"m\xe1nu\xf0um"):a?s+"m\xe1nu\xf0ur":s+(_?"m\xe1nu\xf0":"m\xe1nu\xf0i");case"y":return a||_?"\xe1r":"\xe1ri";case"yy":return t(e)?s+(a||_?"\xe1r":"\xe1rum"):s+(a||_?"\xe1r":"\xe1ri")}}e.lang("is",{months:"jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),weekdays:"sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),weekdaysShort:"sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),weekdaysMin:"Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd, D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[\xed dag kl.] LT",nextDay:"[\xe1 morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xed g\xe6r kl.] LT",lastWeek:"[s\xed\xf0asta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s s\xed\xf0an",s:a,m:a,mm:a,h:"klukkustund",hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},ordinal:"%d.",week:{dow:1,doy:4}})}"function"==typeof define&&define.amd&&define(["moment"],e),"undefined"!=typeof window&&window.moment&&e(window.moment)}();