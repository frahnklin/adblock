function FindProxyForURL(url,host){
// Tracking/ad URLs
   if(shExpMatch(url,"*adsafeprotected*") ||
      shExpMatch(url,"*app-analytics*") ||
      shExpMatch(url,"*app-measurement.com*") ||
      shExpMatch(url,"*googlead*") ||
      shExpMatch(url,"*googlesyndication*") ||
      shExpMatch(url,"*applovin.com*") ||
      shExpMatch(url,"*googletagmanager*") ||
      shExpMatch(url,"*pubads*") ||
      shExpMatch(url,"*adclick*") ||
      shExpMatch(url,"*doubleclick*") ||
      shExpMatch(url,"*graph.facebook*") ||
      shExpMatch(url,"*graph.instagram*") ||
      shExpMatch(url,"*connect.facebook*") ||
      shExpMatch(url,"*connect.instagram*") ||
      shExpMatch(url,"*app.adjust*") ||
      shExpMatch(url,"*firebaselogging*") ||
      shExpMatch(url,"*sentry.io*") ||
      shExpMatch(url,"*unity3d.com*") ||
      shExpMatch(url,"*amplitude.com*") ||
      shExpMatch(url,"*adcolony.com*") ||
      shExpMatch(url,"*vungle.com*") ||
      shExpMatch(url,"*chartboost.com*") ||
      shExpMatch(url,"*inmobi.com*") ||
      shExpMatch(url,"*crashlytics.com*") ||
      shExpMatch(url,"*amazon-adsystem*") ||
      shExpMatch(url,"*online-metrix*") ||
      shExpMatch(url,"*onlinemetrix*") ||
      shExpMatch(url,"*2leep*") ||
      shExpMatch(url,"*outbrain*") ||
      shExpMatch(url,"*demdex*") ||
      shExpMatch(url,"*ads.microsoft*") ||
      shExpMatch(url,"*microsoftanalytics*") ||
      shExpMatch(url,"*data.microsoft*") ||
// Tracking/ad URL parameters
      shExpMatch(url,"*log_event/bz?*__comet_req=") ||
      shExpMatch(url,"*facebook.com/tr?*") ||
      shExpMatch(url,"*instagram.com/logging*") ||
      shExpMatch(url,"*instagram.com/ajax/bz*") ||
      shExpMatch(url,"*google.com/log?*") ||
      shExpMatch(url,"*flushimpressions*") ||
      shExpMatch(url,"*google.com/pagead*") ||
      shExpMatch(url,"*youtube.com/youtubei/*/log_event*") ||
      shExpMatch(url,"*retargeting-pixels*") ||
      shExpMatch(url,"*comscore_pageview*"))    return "PROXY 127.0.0.1:8021";
   return "DIRECT";
}
