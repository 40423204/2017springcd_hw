var tipuesearch = {"pages":[{"title":"About","tags":"misc","url":"./pages/about/","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog"},{"title":"test","tags":"40423204","url":"./test.html","text":"組員協同練習: 請以 W15 練習為網誌標題, 800x600 為畫布大小, 在畫布正中央畫一個半徑為 250 畫素, 壓力角 20, 齒數為 36 齒的漸開線正齒輪輪廓. 完成後, 請在正齒輪中央寫上自己的學號, 並建立第二個 800x600 的畫布, 但只畫出只有上半齒形輪廓的正齒輪, 且半齒輪廓下方水平線以紅色線繪製, 且在齒輪下方以藍色字元寫上自己的學號. 請各學員在各自 github 倉儲中的 data/py 目錄中, 編寫一個可以採圓心座標, 節圓半徑, 齒數, 壓力角與定位角度作為輸入的齒輪程式函式, 交由組長從各組員的 submodule 設定中呼叫導入, 以便在各分組的網頁中完成一個畫出所有組員協同繪圖的齒輪減速組圖, 且各齒輪正中心必須寫上組員學號, 各組按照學號大小排序, 分別由最右邊齒數 16 齒開始囓合, 依序增加 2 齒, 當排至平面四齒囓合後, 第五位組員則以垂直方向向下囓合兩個齒輪後, 轉由右至左水平排列, 直至所有組員均各提供一個協同囓合用的齒輪為止. 請依照上述規劃, 在 Onshape 完成相同齒輪組的囓合協同繪圖. 各組員與組員請同時用 Youtube 與 vimeo, 紀錄上述各階段程式編寫與繪圖配置的 mp4 影片檔案, 標題為\"協同產品設計實習第十五週練習\"."},{"title":"week7","tags":"40423204","url":"./week7.html","text":"往fossil傳遞檔案，以及onshape參數繪圖 Part1. 全自動的 start.bat 近端的 fossil SCM + stunnel W7 起將要利用FOSSIL進行文字檔設計資料的版次管理. 協同產品設計課程有哪些文字檔案設計資料？ .py .md .bat reveal 與 pelican 的設計檔案 Part2. Solvespace , Onshape 的 one-link , fore-bar , eight-bar零件組圖，轉入V-rep 進行速度控制(動畫模擬) 將stl零組件展示在分組網誌，能否多stl零組件集中在一個 html業面，協同？ Part3. 期中報告與自評 Part_X1. Onshape Part Studio 建立教學，零件參數管理建立。 Onshape 零組件轉出 stl 檔為定位方便，軸與孔不可以理想完整配合。 須留餘隙，否則在轉出 stl 檔時將會將會與孔干涉，導致孔與軸疊合為一零件。 圓柱體總高不可小於或者等於直徑，導入 V-rep 會無法辨識其為柱狀零件(軸)。V-rep 其便是軸為抓取零件之長寬比。 Part_X2. sqlite3.exe 工具 sqlite vcp.fossil log in pw cap .schema user select login,pw cap from user 更改user ps(password) update user set up ='s' where login='****'; Part_X3. fossil clone uri vcp.fossil(Filename) fossil open ./ ../ ../vcp.fossil 進行改版 fossil add. fossil remote -url off fossil commit -m \"commit messenge\" fossil push https://user@192.168. . * key-in user passeword to complete push 2017-04-11_19-51-04 w7 40423204 from 40423204 on Vimeo ."},{"title":"week6","tags":"40423204","url":"./week6.html","text":"準備期中驗收 完成其他組件的v-rep做動模擬 完成課程遺漏部分，便於下週進行自評 2017-04-04_23-26-45 40423204_w6 from 40423204 on Vimeo ."},{"title":"week5","tags":"40423204","url":"./week5.html","text":"fossil wiki首頁的使用及使one-link bar轉動 建立一個與project name同名的wiki，該wiki會成為首頁 認識fossil wiki的三種編譯方式-Fossil wiki，Markdown 以及Plain text 嘗試利用V-rep使solvespace做出的one-link bar，利用triangle mesh存檔後進行旋轉做動 做好one link bar 之後要利用export triangle mesh存成stl檔，在V-REP用inport打開此檔案，之後用edit>grouping/merging>divide selected shapes進行分解 將軸放至底部的子目錄，再將上蓋放置軸的子目錄進行固定，最後將軸變成馬達，即可讓簡易的one-link bar進行轉動 2017-03-28_18-30-41 40423204_hw5 from 40423204 on Vimeo ."},{"title":"week4","tags":"40423204","url":"./week4.html","text":"運營fossil製程的wiki 使用老師建立的新fossil，獲得管理權後加入其他組員 介紹altair的應力分析 認識Xming X-windows vnc remote desktop 2017-03-20_22-26-25 40423204﹍w4 from 40423204 on Vimeo ."},{"title":"week3","tags":"40423204","url":"./week3.html","text":"介紹Altair及製作近端fossil 從 https://mde2al.kmol.info 進入新區域的wiki檢視每周進度 了解Altair的soildthinking 認識Altair的特色，其中包括檢測受力.受熱.流力.最小化資源利用.較為人性的快捷列 更改start的fossil路徑並且建立自己的近端fossil帳號密碼"},{"title":"week2","tags":"40423204","url":"./week2.html","text":"使用py進行有效率的分組 使用ethercalc製作簡易的分組表格 認識cp950(大五碼) 使用py建立分組程序，並且挑出未被分類的學生 製作簡易連桿組 了解vrep起始抓點，在做stl檔的時候原點需跟物件拉開一定距離 2017-03-02 40423204 w2 from 40423204 on Vimeo ."},{"title":"week1","tags":"40423204","url":"./week1.html","text":"介紹課程大綱 了解Blender 3dstudio maya之相關性 stunnel 的使用 http的proxy 在py語言中,;(分號)=註解 簡略介紹c語言與py的優劣與使用時機 利用cmd輸出ipconfig /all 查詢ip後 至stunnel>config>stunnel.conf\\,利用Scite找到http字串修改其ip 進入例如https://192.168.1.24/2017springvcp_hw/index 的協同區域,並且嘗試以anonymous（無名氏/遊客）的身份進入 利用vrep配合Scite打開的ttt檔完成做動模擬"}]};