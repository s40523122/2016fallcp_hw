var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","title":"About","text":"2016Fall 修課成員網誌"},{"url":"./lian-gan-ji-gou-2.html","tags":"practice","title":"連桿機構-2","text":"window.onload=function(){ brython(1); } from browser import document from browser import window from browser import timer import math canvas = document[\"onebar\"] ctx = canvas.getContext(\"2d\") # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() #畫直線函式 def line(x1, y1, x2, y2): # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() line(200, 200, 200, 300) circle(200, 200, 5) x1 = 200 y1 = 200 r = 100 deg = math.pi/180 theta = 0 def animate(): global theta # 刷新畫布 ctx.clearRect(0, 0, canvas.width, canvas.height) # 逐一重新繪製直線與圓心球 x2 = x1 + r*math.cos(theta*deg) y2 = y1 + r*math.sin(theta*deg) line(x1, y1, x2, y2) x3 = 400 y3 = 200 x4 = x3 + r*math.cos(theta*deg) y4 = y3 + r*math.sin(theta*deg) line(x3, y3, x4, y4) # 再加一條小線段 x5 = x2 + 200 y5 = x2 + 200 x5 = x4 y5 = y4 line(x2, y2, x5, y5) circle(x1, y1, 5) circle(400, y1, 5) theta += 1 timer.set_interval(animate, 50)"},{"url":"./lian-gan-ji-gou.html","tags":"practice","title":"連桿機構","text":"window.onload=function(){ brython(1); } from browser import document from browser import window from browser import timer import math canvas = document[\"onebar\"] ctx = canvas.getContext(\"2d\") # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() #畫直線函式 def line(x1, y1, x2, y2): # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() line(200, 200, 200, 300) circle(200, 200, 5) x1 = 200 y1 = 200 r = 100 deg = math.pi/180 theta = 0 def animate(): global theta # 刷新畫布 ctx.clearRect(0, 0, canvas.width, canvas.height) # 逐一重新繪製直線與圓心球 x2 = x1 + r*math.cos(theta*deg) y2 = y1 + r*math.sin(theta*deg) line(x1, y1, x2, y2) # 再加一條小線段 x3 = x2 + 50 y3 = y2 + 50 line(x2, y2, x3, y3) x4 = 400 y4 = 200 x5 = x4 - 200 y5 = y4 - 200 x5 = x3 y5 = y3 x5y5x3y3 = 200 line(x4, y4, x5, y5) circle(x1, y1, 5) circle(400, y1, 5) theta += 1 timer.set_interval(animate, 50)"},{"url":"./buttontchan-sheng-luan-shu.html","tags":"practice","title":"buttont產生亂數","text":"window.onload=function(){ brython(1); } from browser import document from browser import html import random print_location = document[\"newyear\"] def gen_int(): num = random.randint(1, 49) # 設法將 num 列印在網頁上 #print_location = document[\"newyear\"] print_location <= num + html.BR() def lottery(e): for i in range(6): gen_int() print_location <= \"(可能重複)恭喜中獎!\" + html.BR() #document[\"but1\"].bind(\"click\", gen_int) document[\"but1\"].bind(\"click\", lottery) 產生 1-49 整數亂數 (可能重複) from browser import document from browser import html import random print_location = document[\"newyear\"] def lottery(e): num_list = random.sample(list(range(1, 50)), 6) for i in range(6): print_location <= num_list[i] + html.BR() print_location <= \"(不會重複)恭喜中獎!\" + html.BR() document[\"but2\"].bind(\"click\", lottery) 恭喜中獎 from browser import document from browser import html import random id3 = document[\"id3\"] def guess(ev): # 清除 id3 中的內容 id3.clear() id3 <= \"開始玩猜數字遊戲\" + html.BR() 標準答案 = random.randint(1, 100) 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 = 1 while 標準答案 != 你猜的數字: if 標準答案 < 你猜的數字: #print(\"太大了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太大了，再猜一次 :)加油\" + html.BR() else: #print(\"太小了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太小了，再猜一次 :)加油\" + html.BR() 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id3 <= \"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\" document[\"but3\"].bind(\"click\", guess) 玩猜數字遊戲 from browser import document from browser import html import random id4 = document[\"id4\"] def autoguess(ev): 執行次數 = 100 總猜測次數 = 0 for i in range(執行次數): id4 <= \"第\" + str(i+1) + \"次玩:\" + html.BR() 下限 = 1 上限 = 100 標準答案 = random.randint(下限, 上限) pc猜的數字 = random.randint(下限, 上限) #print(標準答案, pc猜的數字) #integer int() #string str() #float float() #你猜的數字 = int(input(\"請輸入您所猜的整數:\")) 猜測次數 = 1 while 標準答案 != pc猜的數字: if 標準答案 < pc猜的數字: #print(\"太大了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 - 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太大了!\" + html.BR() 上限 = pc猜的數字 - 1 else: #print(\"太小了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 + 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太小了!\" + html.BR() 下限 = pc猜的數字 + 1 #pc猜的數字 = int(input(\"請輸入您所猜的整數:\")) pc猜的數字 = random.randint(下限, 上限) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id4 <= \"電腦猜對了, 答案為: \" + str(標準答案) + \", 總共猜了 \"+ str(猜測次數) + \"次\" + html.BR() 總猜測次數 += 猜測次數 平均猜測次數 = int(總猜測次數/執行次數) #print(\"平均次數\", 平均猜測次數) id4 <= \"平均次數: \" + str(平均猜測次數) document[\"but4\"].bind(\"click\", autoguess) 利用程式玩猜數字"},{"url":"./buttonlian-xi.html","tags":"practice","title":"button練習","text":"window.onload=function(){ brython(1); } from browser import document as do from browser import html c = do[\"con\"] def press(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 try: if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() except: c <= \"請輸入整數!!\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", press) press me"},{"url":"./ji-ta-he-xian.html","tags":"practice","title":"吉他和弦","text":"window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 500 ctx.strokeStyle = \"pink\" ctx.moveTo(0,250) ctx.lineTo(600,250) ctx.stroke() ctx.closePath() ctx.beginPath() ctx.lineWidth = 6 ctx.strokeStyle = \"red\" ctx.moveTo(209.5,153) ctx.lineTo(360.5,153) ctx.stroke() ctx.closePath() ctx.beginPath() ctx.lineWidth = 1 ctx.strokeStyle = \"red\" inc=30 for i in range(6): ctx.moveTo(210+i*inc,400) ctx.lineTo(210+i*inc,150) ctx.stroke() ctx.closePath() ctx.beginPath() ctx.lineWidth = 1 ctx.strokeStyle = \"red\" inc=-50 for i in range(5): ctx.moveTo(210,400+i*inc) ctx.lineTo(360,400+i*inc) ctx.stroke() ctx.closePath()"},{"url":"./hui-tu.html","tags":"practice","title":"繪圖","text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) #迴圈 inc=10 for i in range(10): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) ''' # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫正方形 ctx.lineTo(100, 300) ctx.lineTo(400, 300) ctx.lineTo(400, 100) ctx.lineTo(100, 100) ''' # 畫右上左下的斜線 #ctx.moveTo(150, 100) #ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"red\" # 實際執行畫線 ctx.stroke() ctx.closePath() 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) #迴圈 inc=10 for i in range(10): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) ''' # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫正方形 ctx.lineTo(100, 300) ctx.lineTo(400, 300) ctx.lineTo(400, 100) ctx.lineTo(100, 100) ''' # 畫右上左下的斜線 #ctx.moveTo(150, 100) #ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"red\" # 實際執行畫線 ctx.stroke() ctx.closePath()"},{"url":"./jiang-dang-an-cong-yuan-duan-la-zhi-jin-duan-xiu-gai.html","tags":"hw","title":"將檔案從遠端拉至近端修改","text":"1.cd 進入想儲存的資料夾 2.git clone 遠端的網址 (可在後面加名稱表創一個資料夾) 3.git branch 確認分支是否正確，可在後面加名稱表加入一個新分支 4.git checkout 切換成想要使用的分支 5.git status 確認資料夾狀態 6.git all -A 加入全部的修改 7.git commit -m 提交並給一個訊息 8.git push origin 推回遠端，可在後面家要加入的分支的名稱"},{"url":"./shi-yong-localhost.html","tags":"hw","title":"使用localhost","text":"使用localhost localhost from JJC210 on Vimeo ."},{"url":"./sharexjian-jie.html","tags":"hw","title":"ShareX簡介","text":"介紹ShareX基本操作 sharex from JJC210 on Vimeo ."},{"url":"./git-clone-cao-zuo.html","tags":"hw","title":"git clone 操作","text":"將資料從遠端倉儲拉回近端並提交回另一個遠端倉儲 clone from JJC210 on Vimeo ."},{"url":"./githubjian-jie.html","tags":"hw","title":"github簡介","text":"介紹github基本操作 github from JJC210 on Vimeo ."},{"url":"./gitzhi-ling.html","tags":"hw","title":"git指令","text":"cd=change directory dir=directory mk dir=make directory git clone ...........................克隆 倉儲資料 git branch..............................查詢目前分支 git branch ...........................建立 分支 git checkout ........................改成 分支 git status..............................查看目前檔案情形 git config --global user.name \" \".....登入名稱 git config --global user.email ......登入信箱 git add -A..............................加入全部(-A =all) git commit -m...........................提交訊息(-m =message) git push ### ........................提交至###的 分支(若### =origin 表原網頁)"}]};