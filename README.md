# 🤖 Papyon AI — AI Application Platform (Backend)

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

**Papyon AI platformunun REST API backend servisi.**

</div>

---

## ✨ Özellikler

- 🔐 **Authentication** — Kullanıcı kimlik doğrulama ve yetkilendirme
- 👥 **Kullanıcı Yönetimi** — CRUD ve rol bazlı erişim
- 🛡 **Güvenlik** — Helmet, CORS middleware
- 📝 **Loglama** — Morgan HTTP request logging
- ⚙️ **Konfigürasyon** — Environment bazlı ayarlar

## 🛠 Teknolojiler

| Teknoloji | Versiyon |
|-----------|----------|
| Express | 4.21.2 |
| MongoDB + Mongoose | 8.12.1 |
| Helmet | 8.0.0 |
| CORS | 2.8.5 |
| Morgan | 1.10.0 |

## 🚀 Kurulum

```bash
git clone https://github.com/mvtandas/papyon-ai-backend.git
cd papyon-ai-backend
npm install
cp .env.example .env  # MongoDB URI ayarla
npm run dev
```

> 🖥 Frontend için: [papyon-ai-frontend](https://github.com/mvtandas/papyon-ai-frontend)

## 📝 Lisans

MIT
