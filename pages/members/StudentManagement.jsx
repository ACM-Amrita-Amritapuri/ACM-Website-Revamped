import React from 'react'
import StudentCard from "./StudentCard";
import Image from "next/image";

const StudentManagement = () => {
  return (
    <div className='flex flex-col items-center backstudmanage'>
      <div className='flex justify-center mb-20'>
        <div className="faculty-header-dot h-6 w-3 mr-3 mt-[15px] bg-gradient-to-t from-blue-700 to-blue-400 rounded-sm"></div>
        <div className='text-5xl font-bold text-center text-slate-100/80'>Student Management</div>
      </div>
      <div className='flex justify-center'>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-32">

        <StudentCard 
            src="/adithya.png"
            name="ADITHYA S NAIR"
            position="Chairman"
            instagram="https://www.instagram.com/nair.ji_"
            linkedin="https://www.linkedin.com/in/adithya-s-nair/"
            github="https://github.com/ADITHYASNAIR2021"
            imageStyle={{ width: '205px', height: '219px' }}
          />

          <StudentCard 
            src="/akarsh2.png"
            name="AKARSH S NAIR"
            position="Vice Chairman"
            instagram = "https://instagram.com/akarxh___?igshid=MWR4YmUzMTlqN2c3dg=="        
            linkedin = "https://in.linkedin.com/in/akarsh-s-nair-426530227"
            github = "https://github.com/akarshsnair"
            imageStyle={{ width: '205px', height: '219px' }}
          />

          <StudentCard 
            src="/Aadithyanraju.jpeg"
            name="Aadithyan Raju"
            position="Secretory"
            instagram = "https://www.instagram.com/aadithyan.raju/"
            linkedin = "https://www.linkedin.com/in/aadithyan-raju/"
            github = "https://github.com/AadithyanRaju"
            imageStyle={{ width: '205px', height: '219px'}}
          />

          <StudentCard 
            src="/dhruvrk.jpg"
            name="Dhruv R Krishnan"
            position="SIG AI Lead"
            instagram = "https://www.instagram.com/drk_kai20"
            linkedin = "https://www.linkedin.com/in/dhruv-krishnan-65772923a/"
            github = "https://github.com/DRK-20"
            imageStyle={{ width: '205px', height: '219px' }}
          />

          <StudentCard 
           src="/krishna.jpeg"
            name="A P Krishna"
            position="SIG AI Co Lead"
            instagram = " "        
            linkedin = "https://in.linkedin.com/in/apkrishna"
            github = "https://github.com/apkrishna16"
            imageStyle={{ width: '205px', height: '219px' }}
          />
          <StudentCard
            src="/maanav.png"
            name="Maanav Thalapilly"
            position="SIG CP Lead"
            linkedin = "https://www.linkedin.com/in/maanav-thalapilly-4718ab24a/"
            Github = "https://github.com/MaanavT"
            instagram= "https://instagram.com/_maanav.mn_?utm_source=qr&igshid=YzU1NGVlODEzOA=="
            imageStyle={{ width: '205px', height: '219px' }}
          />
          <StudentCard 
            src="/kisore.jpg"
            name="Kisor.G"
            position="SIG Glitch Lead"
            linkedin = "www.linkedin.com/in/kisor-g"
            instagram= "https://instagram.com/_kisor__"
            imageStyle={{ width: '205px', height: '219px' }}
          />

          <StudentCard 
            src="/athul.png"
            name="ATHUL GIREESH"
            position="Social Media Manager"
            instagram = "https://www.instagram.com/b_l_a_c_ks_a_n_t_a/"
            linkedin = "https://www.linkedin.com/in/athul-gireesh-02b4a8227/"
            github = "https://github.com/Athulg19"
            imageStyle={{ width: '205px', height: '219px' }}
          />
          {/* <StudentCard 
            image={require("./../public/Students/sayanthika.png")}
            name="Sayanthika K R"
            position="Social Media Manager"
            linkedin = "linkedin.com/in/sayanthika-k-r-7048a4242"
            Github = "https://github.com/Sayanthikarajesh"
            instagram= "https://instagram.com/sayanthikaaa?igshid=MW5uY2NlbXcyaW01aQ=="
            imageStyle={{ width: '205px', height: '219px' }}
          /> */}

          <StudentCard 
            src="/gautham.png"
            name="Gautham Krishna"
            position="Design Lead"
            instagram = "https://www.instagram.com/i_gauthu"
            linkedin = "https://www.linkedin.com/in/gauthu/"
            github = "https://github.com/gauthu3013"
            imageStyle={{ width: '205px', height: '219px' }}
          />

          <StudentCard 
            src="/ashwinsabu.png"
            name="Ashwin Sabu"
            position="Design Team Co-Lead"
            instagram = "https://www.instagram.com/crosstar_xyvl_001/"
            linkedin = "https://www.linkedin.com/in/ashwin-sabu-31a0a0b4/"
            github = "https://github.com/CROSSTAR001"
            imageStyle={{ width: '205px', height: '219px'}}
          />
{/*
          <StudentCard 
            image={require("./../public/Students/akshit.jpg")}
            name="AKSHIT"
            position="Chairman"
            instagram="https://www.instagram.com/akshit_1602"
            linkedin="https://www.linkedin.com/in/akshit-sk/"
            github="https://github.com/4k5h1t"
          />
          <StudentCard 
            image={require("./../public/Students/gourinath.jpg")}
            name="GOURINATH"
            position="Vice Chairman"
            instagram = "https://www.instagram.com/gnhd.11/"
            linkedin = "https://www.linkedin.com/in/gourinath-a9a53085/"
            github = "https://github.com/GNHD"
          />
  
          <StudentCard 
            image={require("./../public/Students/aby.jpg")}
            name="ABY STALIN"
            position="Creative Head"
            instagram = "https://www.instagram.com/alby.on/"
            linkedin = "https://www.linkedin.com/in/aby-stalin/"
            github = "https://github.com/Alby0n/"
          />
          <StudentCard 
            image={require("./../public/Students/srilakshmi.jpg")}
            name="SRILAKSHMI S R"
            position="Treasurer"
            instagram = "https://www.instagram.com/_srilakshmi.s.r_/"
            linkedin = "https://www.linkedin.com/in/srilakshmi-s-r-27a1741b8/"
            github = "https://github.com/srilakshmi1912/"
          />
          <StudentCard 
            image={require("./../public/Students/neeraja.jpg")}
            name="R NEERAJA ANAND"
            position="AI Lead"
            instagram = "https://www.instagram.com/neeraja.exe/"
            linkedin = "https://www.linkedin.com/in/rneerajaanand/"
            github = "https://github.com/TheNeerajaAnand/"
          />
 
          <StudentCard 
            image={require("./../public/Students/akhil.jpg")}
            name="AKHIL S KUMAR"
            position="Web Lead"
            instagram = "https://www.instagram.com/_.akhil.sk._/"
            linkedin = "https://www.linkedin.com/in/imakhilskumar/"
            github = "https://github.com/akhil-s-kumar"
          />
          <StudentCard 
            image={require("./../public/Students/vipin.jpg")}
            name="VIPIN VENU"
            position="CyberSec Lead"
            instagram = "https://www.instagram.com/__white_devil__17/"
            linkedin = "https://www.linkedin.com/in/vipin-venu-5245a7211/"
            github = "https://github.com/whitedevil1710"
          />
          <StudentCard
            image={require("./../public/Students/stud5.png")}
            name="N RIZWAN"
            position="Glitch Lead"
            instagram = "https://www.instagram.com/rizwan.nizarudin_/"
            linkedin = "https://www.linkedin.com/in/n-rizwan/"
            github = "https://github.com/stuntstorm"
          />
          <StudentCard
            image={require("./../public/Students/sudhin.jpg")}
            name="SUDHIN S"
            position="CP Lead"
            instagram = "https://www.instagram.com/sudhin_dev/"
            linkedin = "https://www.linkedin.com/in/sudhin_s/"
            github = "https://github.com/sudi050"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default StudentManagement;