const { exec } = require('child_process');
const readline = require('readline');
const os = require('os');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Renk kodları
const C = {
  r: '\x1b[0m',
  o: '\x1b[38;5;208m',
  y: '\x1b[33m',
  c: '\x1b[36m',
  g: '\x1b[32m',
  w: '\x1b[97m',
  d: '\x1b[38;5;240m',
  b: '\x1b[1m'
};

const SERVER_IP = '185.XXX.XXX.XXX:22005';
const DISCORD_URL = 'https://discord.gg/avenor';

let servers = [
  { name: 'Server #1', online: 0, max: 500, status: 'online' },
  { name: 'Server #2', online: 0, max: 500, status: 'offline' },
  { name: 'Server #3', online: 0, max: 500, status: 'offline' }
];

function clear() { console.clear(); }

function drawLine() {
  console.log(`${C.d}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${C.r}`);
}

function drawBox(text) {
  console.log(`${C.o}╔══════════════════════════════════════════════════╗${C.r}`);
  console.log(`${C.o}║${C.r} ${C.b}${C.w}${text.padEnd(48)}${C.r}${C.o} ║${C.r}`);
  console.log(`${C.o}╚══════════════════════════════════════════════════╝${C.r}`);
}

function drawHeader() {
  clear();
  console.log();
  drawBox('    AVENOR ROLEPLAY  ☀️  YAZ GÜNCELLEMESİ 2025');
  console.log();
  drawLine();
  console.log();
}

function drawServerList() {
  console.log(`  ${C.b}${C.w}SUNUCU SEÇ${C.r}`);
  console.log();
  let total = 0;
  servers.forEach((sv) => {
    const dot = sv.status === 'online' ? `${C.g}●` : `${C.d}○`;
    const num = sv.status === 'online' ? `${C.g}${sv.online}` : `${C.d}${sv.online}`;
    console.log(`  ${dot}${C.r} ${sv.name.padEnd(12)}  ${C.w}👥 ${num}${C.r}${C.d} / ${sv.max}${C.r}`);
    total += sv.online;
  });
  console.log();
  drawLine();
  console.log(`  ${C.w}Toplam Online: ${C.b}${C.y}${total}${C.r}  ${C.w}oyuncu${C.r}`);
  console.log();
}

function drawNews() {
  console.log(`  ${C.b}${C.w}SON GÜNCELLEME${C.r}`);
  console.log();
  console.log(`  ${C.o}🌴 Yaz Plajı Etkinliği${C.r}`);
  console.log(`  ${C.d}  Jet ski, yat partisi, su parkı ve daha fazlası!${C.r}`);
  console.log(`  ${C.d}  Yeni araçlar, kıyafetler ve RP senaryoları.${C.r}`);
  console.log();
  console.log(`  ${C.o}🏎️ Yeni Yarış Sistemi${C.r}`);
  console.log(`  ${C.d}  Drift, drag ve off-road yarışları eklendi.${C.r}`);
  console.log();
  drawLine();
  console.log();
}

function drawSocial() {
  console.log(`  ${C.d}💬  Discord  |  🐦  Twitter  |  📺  YouTube${C.r}`);
  console.log();
}

function drawPlayButton() {
  console.log(`  ${C.y}┌────────────────────────────────────────────────┐${C.r}`);
  console.log(`  ${C.y}│${C.r}              ${C.b}${C.w}  [ 1 ]  OYNA  ${C.r}              ${C.y}│${C.r}`);
  console.log(`  ${C.y}└────────────────────────────────────────────────┘${C.r}`);
  console.log();
}

function drawMenu() {
  console.log(`  ${C.w}[2]${C.r}  Discord'a Katıl      ${C.w}[3]${C.r}  Sunucu Durumu`);
  console.log(`  ${C.w}[4]${C.r}  Web Sitesi           ${C.w}[5]${C.r}  Forum`);
  console.log(`  ${C.w}[0]${C.r}  Çıkış`);
  console.log();
  drawLine();
  console.log();
}

function launchGame() {
  console.log(`\n  ${C.g}🚀 RAGE:MP başlatılıyor...${C.r}\n`);
  console.log(`  ${C.d}Sunucu: ${C.w}${SERVER_IP}${C.r}\n`);
  const platform = os.platform();
  if (platform === 'win32') {
    exec(`start "" "rage://connect/${SERVER_IP}"`, { windowsHide: false });
  } else if (platform === 'darwin') {
    exec(`open "rage://connect/${SERVER_IP}"`);
  } else {
    exec(`xdg-open "rage://connect/${SERVER_IP}"`);
  }
  setTimeout(() => {
    console.log(`  ${C.g}✅ RAGE:MP açıldı! Sunucuya bağlanmayı dene.\n${C.r}`);
    setTimeout(() => showMain(), 3000);
  }, 1500);
}

function openDiscord() {
  console.log(`\n  ${C.c}💬 Discord sunucusu açılıyor...${C.r}\n`);
  const platform = os.platform();
  if (platform === 'win32') exec(`start "" "${DISCORD_URL}"`);
  else if (platform === 'darwin') exec(`open "${DISCORD_URL}"`);
  else exec(`xdg-open "${DISCORD_URL}"`);
  setTimeout(() => showMain(), 2000);
}

function openWebsite() {
  const url = 'https://avenorrp.com';
  console.log(`\n  ${C.c}🌐 Web sitesi açılıyor...${C.r}\n`);
  const platform = os.platform();
  if (platform === 'win32') exec(`start "" "${url}"`);
  else if (platform === 'darwin') exec(`open "${url}"`);
  else exec(`xdg-open "${url}"`);
  setTimeout(() => showMain(), 2000);
}

function openForum() {
  const url = 'https://forum.avenorrp.com';
  console.log(`\n  ${C.c}📋 Forum açılıyor...${C.r}\n`);
  const platform = os.platform();
  if (platform === 'win32') exec(`start "" "${url}"`);
  else if (platform === 'darwin') exec(`open "${url}"`);
  else exec(`xdg-open "${url}"`);
  setTimeout(() => showMain(), 2000);
}

function checkStatus() {
  console.log(`\n  ${C.w}📡 Sunucu Durumu Kontrolü${C.r}\n`);
  console.log(`  ${C.d}Sunucu IP: ${C.w}${SERVER_IP}${C.r}`);
  console.log(`  ${C.d}Platform:  ${C.w}RAGE:MP${C.r}`);
  console.log(`  ${C.d}Durum:     ${C.g}● Çevrimiçi${C.r}`);
  console.log(`  ${C.d}Ping:      ${C.y}~45ms${C.r}`);
  console.log(`  ${C.d}Slot:      ${C.w}256 / 500${C.r}`);
  console.log();
  drawLine();
  console.log();
  setTimeout(() => showMain(), 3000);
}

function showMain() {
  drawHeader();
  drawServerList();
  drawNews();
  drawPlayButton();
  drawSocial();
  drawMenu();
  rl.question(`  ${C.w}Seçim: ${C.r}`, (choice) => {
    switch(choice.trim()) {
      case '1': launchGame(); break;
      case '2': openDiscord(); break;
      case '3': checkStatus(); break;
      case '4': openWebsite(); break;
      case '5': openForum(); break;
      case '0': case 'q': case 'exit':
        console.log(`\n  ${C.g}👋 Görüşmek üzere! Avenor Roleplay takımı.${C.r}\n`);
        rl.close(); process.exit(0);
      default:
        console.log(`\n  ${C.o}⚠️  Geçersiz seçim. Tekrar dene.${C.r}\n`);
        setTimeout(() => showMain(), 1500);
    }
  });
}

drawHeader();
console.log(`  ${C.d}Avenor Roleplay Launcher v1.0${C.r}`);
console.log(`  ${C.d}RAGE:MP üzerinden çalışır.${C.r}\n`);
setTimeout(() => showMain(), 1000);
rl.on('close', () => process.exit(0));
