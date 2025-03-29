import Jobs from "../models/Jobs.js";

export const getEmailTemplates = async (request, response) => {
  const Id = request.params.id.toString();
  const selectedJob = await Jobs.findById(Id);
  const templates = [
    {
      id: 1,
      slug: "friendly applyed",
      body: `Dengan hormat,\nSesuai dengan informasi yang ada pada Aplikasi LK Jobs Portal bahwa ${
        selectedJob.company
      } sedang membutuhkan tenaga kerja sebagai ${
        selectedJob.title
      }, maka saya yang bertanda tangan di bawah ini:\n\n     Nama :\n     Alamat :\n     Tempat, Tanggal lahir :\n     Pendidikan :\n\nBermaksud untuk mengisi lowongan pada pekerjaan tersebut.Bersama dengan surat ini saya juga melampirkan ${
        selectedJob.file_requirement
          ? selectedJob.file_requirement.map((item) => item)
          : "(file lampiran yang diminta)"
      } sebagai bahan pertimbangan Bapak/Ibu ke dalam bentuk attachment yang bisa diunduh.\n\nBesar harapan saya untuk menghadiri panggilan tes dan wawancara untuk menjelaskan lebih mendalam mengenai data diri saya.\nAtas perhatian Bapak/Ibu, saya mengucapkan terima kasih.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 2,
      slug: "friendly email",
      body: `Dengan hormat,\nYang bertanda tangan di bawah ini:\n\n     Nama :\n     Tempat, Tanggal Lahir   :\n     Umur :\n     Jenis Kelamin  :\n     Status :\n     Pendidikan Terakhir  :\n     No. Telepon  :\n     Alamat Rumah :\n\nDengan surat lamaran ini saya mengajukan permohonan kerja di perusahaan yang Bapak/Ibu pimpin untuk menempati posisi ${
        selectedJob.title
      }.\nSebagai bahan pertimbangan saya telah melampirkan beberapa berkas penting sebagai berikut:\n${
        selectedJob.file_requirement
          ? `\n` +
            selectedJob.file_requirement
              .map((item, i) => `    ${i + 1}.${item}`)
              .join("\n") +
            `\n`
          : "\n1.(file lampiran yang diminta)\n"
      }\nDemikian surat lamaran kerja yang saya buat, dengan lamaran ini kami berharap agar dapat diterima di perusahaan yang Bapak/Ibu pimpin. Terima kasih\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 3,
      slug: "friendly applyed email",
      body: `Dengan Hormat,\nMelalui surat lamaran ini saya ingin mengajukan diri untuk melamar pekerjaan di perusahaan yang Bapak/Ibu pimpin guna mengisi posisi yang dibutuhkan saat ini yaitu posisi ${
        selectedJob.title
      }.\nSaya yang bertanda tangan di bawah ini :\n\n     Nama :\n     Tempat, tanggal lahir  :\n     Jenis Kelamin :\n     Pendidikan terakhir  :\n     Alamat  :\n     Telepon :\n\nSebagai bahan pertimbangan Bapak/ Ibu dan untuk melengkapi beberapa data yang diperlukan, dengan ini saya lampirkan juga kelengkapan data diri saya sebagai berikut :\n${
        selectedJob.file_requirement
          ? `\n` +
            selectedJob.file_requirement
              .map((item, i) => `    ${i + 1}.${item}`)
              .join("\n") +
            `\n`
          : "\n1.(file lampiran yang diminta)\n"
      }\nDemikian surat lamaran ini saya buat dengan sebenar-benarnya dan atas perhatian serta kebijaksanaan Bapak/Ibu, saya ucapkan terimakasih.\n\nHormat saya\n\n(nama & tanda tangan)`,
    },
    {
      id: 4,
      slug: "friendly applyed email",
      body: `Yth. Pimpinan Bagian Human Resources Department (HRD)\n${
        selectedJob.company
      }\nDi ${
        selectedJob.location
      }\n\nDengan hormat,\nSaya yang bertandatangan di bawah ini:\n\n     Nama :\n     Tempat / tgl. lahir :\n     Pendidikan Terakhir :\n     Alamat :\n     Telepon :\n     Status :\n\nDengan surat ini saya ingin mengajukan lamaran pekerjaan di perusahaan yang Bapak / Ibu pimpin sebagai ${
        selectedJob.title
      }.\nSaya memiliki pengalaman bekerja sebagai staff bagian ${
        selectedJob.title
      } di perusahaan ${
        selectedJob.kategoris.kategori
      } swasta. Dan dengan surat permohonan ini saya siap untuk berkontribusi pada majunya ${
        selectedJob.company
      } yang Bapak/Ibu pimpin.\nSebagai bahan pertimbangan, saya melampirkan:\n${
        selectedJob.file_requirement
          ? `\n` +
            selectedJob.file_requirement
              .map((item, i) => `    ${i + 1}.${item}`)
              .join("\n") +
            `\n`
          : "\n1.(file lampiran yang diminta)\n"
      }\nDemikian surat lamaran kerja ini saya buat, terima kasih atas perhatian Bapak / Ibu.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 5,
      slug: "friendly applyed email",
      body: `Dengan Hormat,\nBerdasarkan informasi lowongan kerja di mana ${
        selectedJob.company
      } mencari seorang ${
        selectedJob.title
      }, maka melalui surat lamaran ini saya ingin mengajukan diri untuk melamar pekerjaan di perusahaan yang Bapak/Ibu pimpin guna mengisi posisi ${
        selectedJob.title
      }.\nSaya yang bertanda tangan di bawah ini :\n\n     Nama :\n     Tempat, tanggal lahir:\n     Jenis Kelamin :\n     Pendidikan terakhir :\n     Alamat  :\n     Telepon  :\n\nSebagai bahan pertimbangan Bapak/ Ibu dan untuk melengkapi beberapa data yang diperlukan, dengan ini saya lampirkan juga kelengkapan data diri saya seperti ${
        selectedJob.file_requirement
          ? selectedJob.file_requirement.map((item) => `${item}`)
          : "(file lampiran yang diminta)"
      }, dan lain sebagainya.\nDemikian surat lamaran ini saya buat dengan sebenar-benarnya dan atas perhatian serta kebijaksanaan Bapak/Ibu, saya ucapkan terimakasih.\n\nHormat saya\n\n(nama & tanda tangan)`,
    },
    {
      id: 6,
      slug: "friendly applyed email",
      body: `Dear Sir/Madam,\nI have read your job requirement at application and found that your company is looking for employees for ${
        selectedJob.title
      }. And I believe it fits with my background educational as ${
        selectedJob.title
      }.\nMy name is (name), I am twenty three years old. I am a fresh graduated from ${
        selectedJob.kategoris.kategori
      } Department UTY in November this year. My specialization in ${
        selectedJob.title
      }. I consider myself that I have qualifications asyou want. I have good motivation for progress and growth, eager to learn, and can work with a team or by myself. Beside that I have good command in English both spoken and written.\nWith my qualifications, I am confident that I will be able to contribute effectively to your company. Herewith I enclose my :\n${
        selectedJob.file_requirement
          ? `\n` +
            selectedJob.file_requirement
              .map((item, i) => `    ${i + 1}.${item}`)
              .join("\n") +
            `\n`
          : "\n1.(file requirement)\n"
      }\nI would express my gratitude for your attention and I hope I could be the part of your company.\n\nSincerely,\n\n(name & signature)`,
    },
    {
      id: 7,
      slug: "friendly applyed email",
      body: `Dengan hormat,\nYang bertanda tangan di bawah ini:\n\n      Nama  :\n      Tempat, Tanggal lahir :\n      Umur  :\n      Jenis Kelamin :\n      Status :\n      Pendidikan Terakhir :\n      No. Telepon :\n      Alamat Rumah :\n\nBerdasarkan informasi lowongan kerja di mana diinformasikan ${
        selectedJob.company
      } membutuhkan karyawan untuk posisi ${
        selectedJob.title
      }, dengan surat lamaran ini saya mengajukan permohonan kerja di perusahaan yang Bapak/Ibu pimpin untuk menempati posisi ${
        selectedJob.title
      } tersebut.\nSebagai bahan pertimbangan Bapak/Ibu, saya telah melampirkan beberapa berkas penting sebagai berikut:\n${
        selectedJob.file_requirement
          ? `\n` +
            selectedJob.file_requirement
              .map((item, i) => `    ${i + 1}.${item}`)
              .join("\n") +
            `\n`
          : "\n1.(file lampiran yang diminta)\n"
      }\nDemikian surat lamaran kerja yang saya buat. Besar harapan saya untuk dapat diterima di perusahaan yang Bapak/Ibu pimpin.\nTerima kasih.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 8,
      slug: "friendly applyed email",
      body: `Yth. Pimpinan SDM/HRD ${selectedJob.company}\nDi ${
        selectedJob.location
      }\n\nDengan hormat,\nSaya yang bertandatangan di bawah ini:\n\n      Nama :\n      Tempat / tgl. lahir :\n      Pendidikan Terakhir :\n      Alamat :\n      Telepon :\n      Status :\n\nBerdasarkan info lowongan kerja yang dimuat di Aplikasi LK Jobs Portal di mana ${
        selectedJob.company
      } tengah membutuhkan ${
        selectedJob.title
      }, dengan surat ini saya ingin mengajukan lamaran pekerjaan di perusahaan yang Bapak / Ibu pimpin sebagai ${
        selectedJob.title
      }.\nSaya sudah memiliki pengalaman bekerja sebagai ${
        selectedJob.title
      } di beberapa perusahaan swasta sebelumnya. Sebagai bahan pertimbangan, saya melampirkan beberapa dokumen pelengkap, termasuk ${
        selectedJob.file_requirement
          ? selectedJob.file_requirement.map((item) => `${item}`)
          : "(file lampiran yang diminta)"
      }.\nDemikian surat lamaran kerja ini saya buat dengan sebaik-baiknya. Besar harapan saya untuk bisa bekerja di perusahaan yang Bapak/Ibu Pimpin. Terima kasih atas perhatian Bapak / Ibu.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 9,
      slug: "friendly applyed email",
      body: `Kepada YTH\nPimpinan Bagian Sumber Daya Manusia\n${
        selectedJob.company
      }\nDi ${
        selectedJob.location
      }\n\nDengan hormat,\nSesuai dengan penawaran lowongan pekerjaan yang dimuat di Aplikasi LK Jobs Portal tanggal ${
        selectedJob.created_at.toLocaleDateString('id-ID')
      } di mana ${selectedJob.company} sedang mencari ${
        selectedJob.title
      }, saya mengajukan diri untuk bergabung ke dalam tim ${
        selectedJob.title
      } ${
        selectedJob.company
      }.\n\n      Nama :\n      Tempat, Tanggal Lahir  :\n      Pendidikan Terakhir :\n      Alamat Asal :\n      Telepon :\n      Email :\n\nSebagai bahan pertimbangan, saya lampirkan dokumen pelengkap berupa ${
        selectedJob.file_requirement
          ? selectedJob.file_requirement.map((item) => `${item}`)
          : "(file lampiran yang diminta)"
      }. Semua lampiran tersebut dapat Bapak/Ibu unduh dalam attachment yang ada di email ini.\nSaya berharap Bapak/Ibu bersedia meluangkan waktu untuk memberikan kesempatan wawancara, sehingga saya dapat menjelaskan secara lebih terperinci tentang potensi diri saya.\nDemikian surat lamaran ini, dan terima kasih atas perhatian Bapak/Ibu.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 10,
      slug: "friendly\n applyed email\n",
      body: `Dengan hormat,\nSesuai dengan informasi yang dimuat di Aplikasi LK Jobs Portal, edisi ${
        selectedJob.created_at.toLocaleDateString('id-ID')
      }, di mana diinformasikan ${
        selectedJob.company
      } sedang membutuhkan tenaga kerja sebagai ${
        selectedJob.title
      }, maka saya yang bertanda tangan di bawah ini:\n\n      Nama :\n      Alamat :\n      Tempat Tanggal Lahir  :\n      Pendidikan  :\n\nBermaksud untuk mengisi lowongan pada pekerjaan tersebut.\nBersama dengan surat ini, saya juga melampirkan dokumen pendukung lainnya, seperti ${
        selectedJob.file_requirement
          ? selectedJob.file_requirement.map((item) => item)
          : "(file lampiran yang diminta)"
      } dan surat rekomendasi dari tempat kerja sebelumnya, sebagai bahan pertimbangan Bapak/Ibu.\nBesar harapan saya untuk bisa bekerja di perusahaan Bapak/Ibu dan saya menunggu panggilan tes/wawancara dari pihak Bapak/Ibu.\nAtas perhatian Bapak/Ibu, saya mengucapkan terima kasih.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 11,
      slug: "friendly applyed email",
      body: `Yth. Pimpinan Bagian Sumber Daya Manusia\n${selectedJob.company}\nDi ${selectedJob.location}\n\nDengan hormat,\nSaya yang bertandatangan di bawah ini:\n\n      Nama :\n      Tempat / tgl. lahir  :\n      Pendidikan Terakhir :\n      Alamat  :\n      Telepon :\n      Status :\n\nBersama dengan surat ini saya ingin mengajukan lamaran pekerjaan di perusahaan yang Bapak / Ibu pimpin sebagai ${selectedJob.title} sebagaimana diinformasikan pada kolom lowongan kerja aplikasi LK Jobs Portal.\nSaya baru saja lulus perguruan tinggi dengan gelar S1 di bidang ${selectedJob.kategoris.kategori}. Namun selama kuliah, saya sudah mengikuti beberapa program magang dan internship di bidang ${selectedJob.kategoris.kategori}. Saya melampirkan beberapa dokumen pelengkap yang dapat diunduh bersama dengan surat ini.\nDemikian surat lamaran kerja ini saya buat dengan sebaik-baiknya. Besar harapan saya untuk bisa bekerja di perusahaan yang Bapak/Ibu Pimpin. Terima kasih atas perhatian Bapak / Ibu.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 12,
      slug: "friendly applyed email",
      body: `Dengan hormat,\nYang bertanda tangan di bawah ini:\n\n      Nama  :\n      Tempat, Tanggal lahir   :\n      Umur  :\n      Jenis Kelamin :\n      Status  :\n      Pendidikan Terakhir  :\n      No. Telepon :\n      Alamat Rumah :\n\nBerdasarkan informasi lowongan kerja yang dimuat dalam aplikasi LK Jobs Portal di mana dinyatakan ${
        selectedJob.company
      } membutuhkan karyawan untuk mengisi posisi ${
        selectedJob.title
      }, dengan surat lamaran ini saya mengajukan permohonan kerja di perusahaan yang Bapak/Ibu pimpin untuk menempati posisi ${
        selectedJob.title
      } tersebut.\nSaya melampirkan beberapa dokumen pelengkap, seperti ${
        selectedJob.file_requirement
          ? selectedJob.file_requirement.map((item) => `${item}`)
          : "(file lampiran ang diminta)"
      } dan lain-lainnya, yang dapat diunduh di email lamaran kerja ini dan dapat digunakan sebagai bahan pertimbangan Bapak/Ibu.\nDemikian surat lamaran kerja yang saya buat. Besar harapan saya untuk dapat diterima di perusahaan yang Bapak/Ibu pimpin. Terima kasih.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 13,
      slug: "friendly applyed email",
      body: `Dengan Hormat,\nBerdasarkan informasi yang telah saya dapatkan dari aplikasi LK Jobs Portal perihal lowongan pekerjaan di perusahaan yang Bapak/Ibu pimpin. Melalui surat lamaran ini saya ingin mengajukan diri untuk melamar pekerjaan di perusahaan yang Bapak/Ibu pimpin guna mengisi posisi yang dibutuhkan saat ini yaitu posisi ${
        selectedJob.title
      }.\nSaya yang bertanda tangan di bawah ini :\n\n      Nama :\n      Tempat, tanggal  :\n      Jenis Kelamin :\n      Pendidikan terakhir :\n      Alamat :\n      Telepon :\n\nSebagai bahan pertimbangan Bapak/ Ibu dan untuk melengkapi beberapa data yang diperlukan, dengan ini saya lampirkan juga kelengkapan data diri saya sebagai berikut :\n${
        selectedJob.file_requirement
          ? `\n` +
            selectedJob.file_requirement
              .map((item, i) => `    ${i + 1}.${item}`)
              .join("\n") +
            `\n`
          : "\n1.(file lampiran yang diminta)\n"
      }\nDemikian surat lamaran ini saya buat dengan sebenar-benarnya dan atas perhatian serta kebijaksanaan Bapak/Ibu, saya ucapkan terimakasih.\n\nHormat saya\n\n(nama & tanda tangan)`,
    },
    {
      id: 14,
      slug: "friendly applyed email",
      body: `Kepada Yang Terhormat,\nHRD ${selectedJob.company}\nDi ${
        selectedJob.location
      }\n\nDengan hormat,\nSesuai dengan penawaran lowongan pekerjaan dari ${
        selectedJob.company
      }, seperti yang termuat di aplikasi LK Jobs Portal tanggal ${
        selectedJob.created_at.toLocaleDateString('id-ID')
      }. Saya mengajukan diri untuk bergabung ke dalam Tim ${
        selectedJob.title
      } di ${
        selectedJob.company
      }.\nData singkat saya, seperti berikut ini.\n\n      Nama  :\n      Tempat, Tanggal Lahir :\n      Pendidikan Terakhir :\n      Alamat Asal :\n      Telepon :\n      Email  :\n\nSaya memiliki kondisi kesehatan yang sangat baik, dan dapat berbahasa Inggris dengan baik secara lisan maupun tulisan. Latar belakang pendidikan saya sangat memuaskan serta memiliki kemampuan manajemen dan ${
        selectedJob.kategoris.kategori
      } yang baik. Saya telah terbiasa bekerja dengan menggunakan komputer.\nTerutama mengenai ${
        selectedJob.kualifikasi
          ? selectedJob.kualifikasi.map((item) => `${item}`)
          : "(skill atau keahlian)"
      }, maupun surat-menyurat dalam Bahasa Inggris.\nSaat ini saya bekerja sebagai ${
        selectedJob.title
      } di perusahaan A. Saya senang untuk belajar, dan dapat bekerja secara mandiri maupun dalam tim dengan baik.\nSebagai bahan pertimbangan, saya lampirkan :\n${
        selectedJob.file_requirement
          ? `\n` +
            selectedJob.file_requirement
              .map((item, i) => `    ${i + 1}.${item}`)
              .join("\n") +
            `\n`
          : "\n1.(file lampiran yang diminta)\n"
      }\nSemua lampiran tersebut dapat Bapak/Ibu unduh dalam format pdf, sebagaimana surat lamaran ini.\nSaya berharap Bapak/Ibu bersedia meluangkan waktu untuk memberikan kesempatan wawancara, sehingga saya dapat menjelaskan secara lebih terperinci tentang potensi diri saya.\nDemikian surat lamaran ini, dan terima kasih atas perhatian Bapak/Ibu.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 15,
      slug: "friendly applyed email",
      body: `Dengan hormat,\nSesuai dengan informasi yang didapatkan melalui aplikasi LK Jobs Portal pada tanggal ${
        selectedJob.created_at.toLocaleDateString('id-ID')
      } di mana ${
        selectedJob.company
      } membuka booth dan memberi informasi lowongan tenaga kerja sebagai ${
        selectedJob.title
      }, maka saya yang bertanda tangan di bawah ini:\n\n      Nama :\n      Alamat :\n      TTL  :\n      Pendidikan :\n\nBermaksud untuk mengajukan diri melamar pekerjaan pada lowongan tersebut.\nBersama dengan surat ini, saya juga melampirkan dokumen pendukung lain yang dibutuhkan, di antaranya ${
        selectedJob.file_requirement
          ? selectedJob.file_requirement.map((item) => `${item}`)
          : "(file lampiran yang diminta)"
      } yang bisa digunakan sebagai bahan pertimbangan Bapak/Ibu. Semua lampiran saya kirim dalam bentuk attachment yang bisa diunduh.\nBesar harapan saya untuk menghadiri panggilan tes dan wawancara untuk menjelaskan lebih mendalam mengenai data diri saya.\nAtas perhatian Bapak/Ibu, saya mengucapkan terima kasih.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
    {
      id: 16,
      slug: "friendly applyed email",
      body: `Dengan hormat,\nSehubungan dengan adanya lowongan pekerjaan sebagai ${
        selectedJob.title
      } pada aplikasi LK Jobs Portal pada tanggal ${
        selectedJob.created_at.toLocaleDateString('id-ID')
      }, saya yang bertanda tangan di bawah ini:\n\n      Nama :\n      Alamat :\n      Tempat, Tanggal Lahir :\n      Pendidikan :\n\nBermaksud untuk mengajukan lamaran pada posisi tersebut. Bersama dengan surat ini pula saya melampirkan ${
        selectedJob.file_requirement
          ? selectedJob.file_requirement.map((item) => `${item}`)
          : "(file lampiran yang diminta)"
      } sebagai bahan pertimbangan.\nBesar harapan saya untuk menghadiri panggilan tes dan wawancara untuk menjelaskan diri saya lebih detail.\nAtas perhatian Bapak/Ibu saya ucapkan terima kasih.\n\nHormat saya,\n\n(nama & tanda tangan)`,
    },
  ];
  if (selectedJob)
    response.json({
      code: 200,
      status: "OK",
      datas: templates,
      messages: "success",
    });
  else
    response.json({
      code: 404,
      status: "NOT_FOUND",
      messages: "No Data Found !",
    });
};
