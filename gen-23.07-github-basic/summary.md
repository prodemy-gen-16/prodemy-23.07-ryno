# Version Control

### Git & Github Introduction

Git merupakan sebuah **version control system** yang berfungsi untuk memantau dan mencatat setiap perubahan file dalam
suatu project. Karena Git mencatat perubahan file setiap kita melakukan _commit_, maka ini memungkinkan kita untuk
melihat history perubahaan file serta melakukan rollback file ke history tertentu.

Github merupakan **layanan cloud** yang berguna untuk menyimpan dan mengelola **Git repository**. Jadi kita dapat
melakukan sync repository Git yang ada di local machine kita ke server Github itu sendiri. Dengan begitu kita akan lebih
mudah jika ingin melakukan kolaborasi saat membangun sebuah project.

### Repository & Clone

> **Repository** dalam konteks pemrograman dapat diartikan sebagai folder utama tempat kita menyimpan source code.

1. Login ke akun Github
2. Di atas kanan tampilan klik icon + lalu pilih **_New repository_**  
   <img src="https://docs.github.com/assets/cb-31554/mw-1440/images/help/repository/repo-create.webp" width=240>
3. Masukan nama repository yang ingin dibuat  
   <img src="https://docs.github.com/assets/cb-61138/mw-1440/images/help/repository/create-repository-name.webp" width=400>
4. Tambahkan deskripsi dari repository _(optional)_
5. Pilih visibility repository, private atau public
6. Jika sudah sesuai, klik button **_Create repository_**

> Git **clone** berfungsi untuk menyalin repository pada server Github (yang sebelumnya sudah dibuat) ke dalam pc kita.

1. Buka halaman Github repository yang ingin diclone
2. Pada bagian atas kanan klik button **_Code_**  
   <img src="https://docs.github.com/assets/cb-32892/mw-1440/images/help/repository/code-button.webp" width=400>
3. Copy URL untuk bagian yang HTTPS  
   <img src="https://docs.github.com/assets/cb-45942/mw-1440/images/help/repository/https-url-clone-cli.webp" width=400>
4. Buka terminal, lalu masuk ke direktori dimana repository ingin disimpan
5. Jalankan command `git clone` lalu diikuti dengan URL yang tadi sudah dicopy
    ```shell
    git clone https://github.com/prodemy-gen-2307-2308/prodemy-23.07-ryno.git
    ```

### Push & Pull

> Sebelum melakukan push, kita perlu menambahkan file yang ingin dimasukan ke dalam staging index dengan melakukan
> **add**.

Jalankan command `git add` lalu diikuti nama file yang ingin dimasukan. Apabila ingin memasukan semua file bisa dengan
command di bawah. Tanda titik merujuk pada current directory sehingga akan mencakup seluruh file yang ada di dalam
repository.

```shell
git add .
```

> Selanjutnya kita perlu melakukan **commit**, yaitu membuat snapshot dari project. Dengan begitu kedepannya
> kita bisa melakukan rollback ke snapshot ini atau hanya sekadar melihat perbandingan code antar snapshot (versioning).

Cara melakukan commit dengan menjalankan `git commit` lalu biasanya diikuti oleh flag -m dan commit messagenya. Tidak
semua file akan dicommit ke dalam repository, melainkan hanya file yang sebelumnya sudah diadd ke dalam staging index
saja. Contohnya sebagai berikut.

```shell
git commit -m "docs: add summary for the version control topic"
```

> Setelah melakukan commit barulah kita lakukan push. Tujuan dari **push** adalah mengupdate remote repository (dalam
> hal ini Github repository) agar sesuai dengan local repository yang tadi sudah dicommit.

Untuk melakukan push bisa dengan command `git push` diikuti dengan remote name dan branch name.

```shell
git push origin main
```

> Apabila ada perubahan yang dilakukan oleh orang lain pada remote repository, kita perlu melakukan kebalikan dari push
> yaitu **pull**. Tujuan dari pull adalah mengupdate local repository kita agar sesuai dengan remote repository yang
> berada pada server github.

Melakukan pull cukup menggunakan command `git pull`.

```shell
git pull
```

### Branch & Merge

> **Branch** merupakan percabangan di dalam sebuah repository. Pada saat development biasanya kita membuat branch baru
> lalu
> kita melakukan perubahan pada branch baru tersebut. Hal ini dilakukan agar kita tidak langsung melakukan perubahan
> pada branch utama.

Untuk membuat branch baru bisa dengan command `git branch` diikuti dengan nama branchnya. Setelah itu untuk menggunakan
branchnya jalankan command `git checkout`.

```shell
git branch feature-login
git checkout feature-login
```

Apabila ingin langsung menggunakan branch yang ingin dibuat bisa juga langsung `git checkout` lalu ditambahkan flag -b.
Command berikut akan melakukan hal yang sama.

```shell
git checkout -b feature-login
```

> Untuk menggabungkan kembali dua branch menjadi satu branch, kita bisa menggunakan **merge**. Biasanya kita lakukan
> merge ketika branch itu sudah memenuhi tujuannya.

Untuk melakukan merge kita harus kembali dulu ke branch utama. Setelah itu jalankan `git merge` diikuti nama branch yang
ingin dimerge.

```shell
git checkout main
git merge feature-login
```

Setelah dilakukan merge, branch tadi sudah tidak diperlukan lagi karena history commitnya sudah disalin di branch utama.
Karena itu biasanya branch tersebut akan dihapus setelah dimerge.

```shell
git branch -d feature-login
```

### Fork

> **Fork** berfungsi untuk menduplikat repository yang sudah ada sebagai repository baru. Repository baru ini akan
> terpisah seutuhnya dari repository originalnya, sehingga apabila terdapat perubahan baru pada repository original maka
> tidak akan tercatat pada repository baru ini.

1. Buka halaman Github repository yang ingin difork.
2. Di bagian kanan atas klik **Fork**  
   <img src="https://docs.github.com/assets/cb-79331/mw-1440/images/help/repository/fork_button.webp" width=600>
3. Tentukan nama repository barunya
4. Tambahkan deskripsi (opsional)
5. Klik button **Create fork**

### Git Ignore

> Git ignore berfungsi untuk mengabaikan file atau folder agar tidak dimasukan ke dalam Git repository. Karena
> diabaikan, perubahan file atau folder tersebut tidak akan dicatat oleh Git.

1. Buat file baru di dalam repository dengan nama **.gitignore**
2. Tuliskan daftar nama file atau folder yang ingin diabaikan ke dalam file yang dibuat tadi
