Install the packages
Open new terminal tab
Go inside server folder
Run npm install

install FFMPEG LIBRARY , CHECK YOUTUBE . MUST ADD THE LIBRARY AS PATH IN ENVIRORMENT VARIABLE .

create folder name "videos" inside server folder.
create folder name "ipcam" inside videos folder.
create folder name "merge" inside videos folder. // it will actually do our current job . we will set merge.js file to this folder so that it sends 4 sec clip chuck continiously in this folder . and delete rest of the videos accpet last 40 sec . 



run following command 

ffmpeg -i rtsp://admin:gtech@88@192.168.199.22/doc/page/preview.asp -fflags flush_packets -max_delay 2 -flags -global_header -hls_time 1 -hls_list_size 1 -vcodec copy -y .\server\videos\ipcam\index.m3u8


EXPLANATION OF THE COMMAND : 
Execute FFMPEG command

.\server\libs\ffmpeg.exe -i rtsp://{username}:{password}@{ip}:554/stream1 -fflags flush_packets -max_delay 5 -flags -global_header -hls_time 5 -hls_list_size 3 -vcodec copy -y .\videos\ipcam\index.m3u8

After successful execution, we should see the converted video files (index.m3u8 *.ts)

use RSTP STEAM.
MAX DELAY MEANS ..THE PROGRAM WILL WAIT UNTIL IT STARTS A NEW VIDEO CHUNK.
HLS TIME MEANS .. DURATION OF THE VIDEO .
HLS LIST SIZE ... HOW MANY FILES IN SIDE THE LIST .

CHECK THE LIVE FEED :
https://hls-js-dev.netlify.app/demo/ OR ANY HLS PLAYER ONLINE


Cleanup streamed .ts files  // IT WILL CLEAR THE PREVIOUS VIDEO SO THAT THIS DOESNT STORE MUCH VIDEO . 
Open new terminal tab
Go inside server folder
Run .\node_modules\.bin\nodemon .\cleaner.js
This will delete the streamed/served .ts files from local directory to save the space 


Serve the auto generated hls (m3u8) file
Open new terminal tab
Go inside server folder
Run .\node_modules\.bin\nodemon .\hls-server.js


Test hls file in browser
Visit cookpete.com/react-player.
Input the m3u8 url [http://localhost:4000/index.m3u8] and press Load



utomate all of the commands under simplified npm start command in server project IF WANT . 


NOW merge.js  file we need to run .
Open new terminal tab
Go inside server folder
Run .\node_modules\.bin\nodemon .\merge.js


it will actually do our current job . we will set merge.js file to this folder so that it sends 4 sec clip chuck continiously in this folder . and delete rest of the videos accpet last 40 sec .



next we run a .bat file // will be runned inside node red . 

write a program which will exicute after 20sec after the trigger came . and make all the 10 pieces of 4 sec video . in one 40 sec clip . 


check command to write bat  file for more info .
use ffmpeg command to exicute bat file .
add logo , text message in the video using this bat file . 
this bat file also allows to rename the video and screenshot with timestamp , which can later be stored to database according to timestamp . 
for example :
ffmpeg -ss 00:00:20 -i book.mp4 -qscale:v 2 -vf scale=800:-1 -vframes 1 -strftime 1 "screenshot\%%H-%%M-%%S_%%d-%%m-%%Y_SNAPSHOT.jpg"  


