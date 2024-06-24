# Discord.js welcome botu V2.0

- **Bu bot sayesinde tek index dosyasında istediğiniz sayıda botu her biri farklı prefixli ve farklı ses kanallarında duracak şekilde istediğiniz gibi çalıştırabilirsiniz**

- Welcome botunun V2.0 sürümü, ayrı repo açmamın bi kaç sebebi var detaya girmek istemiyorum

# V1.0'dan farkı ve notlar :

- commands klasörü eklendi ve düzeltildi
- v14 de ses aktivitelerinin kullanılması için discordjs@voices modülünün kullanılması lazım ama bu modülde yapmak istediğimiz botu sınırlıyor doalyısıyla bu modülün olmadığı en güncel sürüm olan discord.js@12.5.3 sürümüne geçirdim botu.
- index.js i komple değiştirdim ve artık botları ayrı ayrı sorunsuz şekilde çalıştırıyor.
- artık botları config kısmında "bot1", "bot2" şeklinde belirtmeniz gerekmiyor.
- node terminalde çalışmaya başladıktan 15 saniye sonra ufak bi uyarı alacaksınız terminal kısmında ama önemli birşey değil merak etmeyin sonrasında düzeliyor.

# Bu bot özel istek üzerine yapılmıştır.
[![Discord Istek](https://cdn.discordapp.com/attachments/1173319481599213639/1253628750138970112/image.png?ex=66768c41&is=66753ac1&hm=32cba3cfb9a807ebd27dbfde0f47ae88aff05057fa087c5cd61f449e96c93977&)](https://discord.gg/bdfd)

## Kurulum
1. **Ayarlar Dosyasını Düzenleyin:**
    - `config.js` dosyasını açın ve aşağıdaki alanları kendi bilgilerinizle doldurun:
    ```js
    {
        TOKEN: 'bot-token',
        PREFIX: '!',
        VOICE_CHANNEL_ID: "ses-kanal-id"
    }
    ```
    daha fazlasını eklemek için, ilk botun configlerinin sonundaki süslü parantezin sonuna virgül atıp, bot id sayısını 1 arttırarak bir tane daha aynı configden yazsın. 
    Örnek :
    ```js
    {
        TOKEN: 'bot-token',
        PREFIX: '!',
        VOICE_CHANNEL_ID: "ses-kanal-id"
    },
        {
        TOKEN: 'bot-token',
        PREFIX: '!',
        VOICE_CHANNEL_ID: "ses-kanal-id"
    }
    ```
    
2. **Gerekli Paketleri Yükleyin:**
    - Proje dizininde terminali açın ve aşağıdaki komutu çalıştırın:
    ```bash
    npm i
    pnpm i
    ```
3. **Botu Başlatın:**
    - `node .` ve ya `node index.js` ile dosyasını çalıştırın.

## Glitch Kurulum ve .env modülü eklemek

- ".env" adında bir dosya oluşturun.
- config.js dekileri env ye tamamen aynı olacak şekilde ekleyin.
- index.js içerisine .env modülünü requare edin
- "config.TOKEN" şeklinde tanımlanan her yeri "env.proccess.TOKEN" şeklinde değiştirin (sadce token değil prefix ve kanal id içinde ayynısı geçerli)

**Bu kurulum adımlarını test etmeden sadece aklımdan buraya not düşüyorum yani dediklerim %100 doğru olmayabilir, harf hatası yapmış olurum vs. ChatGPT ile dediklerim üzerinden ilerlerseniz sonuca ulaşacağınızı düşünüyorum.**

## Destek

Herhangi bir sorunla karşılaşırsanız veya yardım almak isterseniz:

[![Discord Banner](https://api.weblutions.com/discord/invite/bdfd/)](https://discord.gg/bdfd)

---

# Başlat.bat yapımı :
- aşağadaki kodu kopyalayıp "start.bat" isimli bi dosya açın, kopyaladığınız metni bat dosyasına girin.
    ```bash
    echo off
    color 0f
    cls
    :a
    node index.js
    goto a
    ```

    iyi kullanımlar