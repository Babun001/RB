// Pulmonology
import pulmonologyImg1 from '../Assets/Frame 2.png';
import pulmonologyImg2 from '../Assets/Frame 3.png';
import pulmonologyImg3 from '../Assets/Frame 2-1.png';

// Gastroenterology
import endoscopyImg from '../Assets/GE1.png';
import colonoscopyImg from '../Assets/GE4.png';
import sigmoidoscopyImg from '../Assets/GE2.png';
import fibroscanImg from '../Assets/GE3.png';

// Physiotherapy
import pt1 from '../Assets/pt1.png'
import pt2 from '../Assets/pt2.png'
import pt3 from '../Assets/pt3.png'

// Ophthalmology
import om1 from '../Assets/om1.png';
import om2 from '../Assets/om2.png';
import om3 from '../Assets/om3.png';
import om4 from '../Assets/om4.png';

// Homecare
import hc1 from '../Assets/hc1.png';
import hc2 from '../Assets/hc2.png';
import hc3 from '../Assets/hc3.png';

// Dermatology
import dl1 from '../Assets/dl1.png';
import dl2 from '../Assets/dl2.png';
import dl3 from '../Assets/dl3.png';
import dl4 from '../Assets/dl4.png';

// Dialysis
import ds1 from '../Assets/ds1.png';
import ds2 from '../Assets/ds2.png';
import ds3 from '../Assets/ds3.png';
import ds4 from '../Assets/ds4.png';

// Dental
import dn1 from '../Assets/dn1.png';
import dn2 from '../Assets/dn2.png';
import dn3 from '../Assets/dn3.png';
import dn4 from '../Assets/dn4.png';

// Neurology
import nl1 from '../Assets/nl1.png';
import nl2 from '../Assets/nl2.png';
import nl3 from '../Assets/nl3.png';
import nl4 from '../Assets/nl4.png';
import nl5 from '../Assets/nl5.png';
import nl6 from '../Assets/nl6.png';

// Radiology
import rl1 from '../Assets/rl1.png';
import rl2 from '../Assets/rl2.png';
import rl3 from '../Assets/rl3.png';
import rl4 from '../Assets/rl4.png';


const ServiceData = {
  Pulmonology: {
    intro: "",
    services: [
      {
        title: "PFT",
        color: "black",
        description:
          "Pulmonary Function Tests (PFTs) are noninvasive breathing tests that determine how well your lungs work. They measure the volume of air inhaled and exhaled and how effectively oxygen moves from the lungs to the bloodstream. PFTs help diagnose or monitor conditions like asthma, chronic obstructive pulmonary disease (COPD) and pulmonary fibrosis. During the test, you blow into a mouthpiece while sensors record your airflow. The results provide doctors with detailed information on lung health and guide treatment decisions. PFTs are typically quick and painless, offering valuable data that help doctors tailor respiratory care.",
        image: pulmonologyImg1
      },
      {
        title: "DLCO Test",
        color: "black",
        description:
          "DLCO is a lung function test that measures how effectively oxygen transfers from the air sacs in your lungs into the blood. During the test, you inhale a small, harmless amount of carbon monoxide, and the machine calculates how much is absorbed into the bloodstream. This indicates your lung’s gas exchange efficiency. DLCO helps diagnose or monitor conditions like emphysema, pulmonary fibrosis or anemia that affect oxygen uptake. It’s one type of PFT and provides specific insight into lung performance.",
        image: pulmonologyImg2
      },
      {
        title: "Feno Test",
        color: "black",
        description:
          "A FeNO test is a simple, noninvasive breath test that measures the level of nitric oxide in the exhaled air. Nitric oxide is a marker of airway inflammation, so higher FeNO levels often indicate inflamed airways, commonly seen in asthma. Doctors use FeNO testing to help diagnose asthma and monitor how well asthma medications are controlling inflammation. During the test, a patient breathes slowly into a handheld device that measures nitric oxide in the breath, giving immediate feedback on airway inflammation levels.",
        image: pulmonologyImg3
      }
    ]
  },

  Gastroenterology: {
    intro: "With endoscopy, colonoscopy, sigmoidoscopy, and FibroScan, we inspect your digestive tract and evaluate liver health, diagnosing reflux, polyps, or fatty liver, then guiding you back to comfortable digestion.",
    services: [
      {
        title: "Endoscopy",
        color: "black",
        description:
          "Endoscopy is a procedure using a thin, flexible tube with a light and camera (an endoscope) to view the inside of the digestive tract. It allows doctors to directly inspect organs such as the esophagus, stomach and small intestine. Endoscopies help diagnose issues like ulcers, inflammation or tumors, and doctors can often treat some problems immediately (for example, removing a polyp or stopping bleeding during the exam). This minimally invasive test provides clear images on a monitor, aiding in both diagnosis and treatment of digestive tract conditions.",
        image: endoscopyImg
      },
      {
        title: "Colonoscopy",
        color: "black",
        description:
          "A colonoscopy is a procedure that uses a long, flexible scope with a camera to examine the entire large intestine (colon). It lets doctors inspect the colon lining and detect problems like polyps, inflammation, or cancer. Colonoscopy is commonly used to screen for colon cancer and to investigate symptoms such as rectal bleeding or chronic abdominal pain. If abnormalities are found, doctors can often remove polyps or take tissue samples (biopsies) during the same exam. This makes colonoscopy a valuable tool for diagnosing and preventing serious colon conditions.",
        image: colonoscopyImg
      },
      {
        title: "Sigmoidoscopy",
        color: "black",
        description:
          "A sigmoidoscopy is a diagnostic procedure similar to a colonoscopy but only examines the lower part of the large intestine (the sigmoid colon and rectum). A flexible tube with a light and camera is inserted through the anus to view this area. Sigmoidoscopy is often used to investigate causes of rectal bleeding, persistent diarrhea or other lower bowel symptoms. During the test, doctors can take tissue samples or remove polyps in this section. Since it focuses on the distal colon, the preparation and exam are generally shorter than for a full colonoscopy.",
        image: sigmoidoscopyImg
      },
      {
        title: "Fibroscan",
        color: "black",
        description:
          "FibroScan is a noninvasive imaging test that uses ultrasound waves to measure the stiffness of the liver. It helps detect and stage liver fibrosis (scarring) often due to chronic liver disease. During the test, a probe applied to the skin over the liver emits painless vibrations. The FibroScan machine measures how quickly these waves travel through the liver tissue; stiffer tissue (from scarring) transmits waves faster. This provides a numerical reading of liver stiffness. FibroScan avoids the need for biopsy and can be repeated to monitor liver health.",
        image: fibroscanImg
      }
    ]
  },

  Radiology: {
    intro: "Our radiologists utilize X‑ray, ultrasound, CT, and MRI to produce detailed images and rapid reports, pinpointing fractures, tumors, or organ anomalies to guide precise diagnoses and accelerate treatment.",
    services: [
      {
        title: "USG",
        color: "black",
        description:
          "Ultrasound (USG) is a safe, noninvasive imaging test that uses high-frequency sound waves to create real-time pictures of organs and structures inside the body. A handheld probe is moved over the skin (usually with gel) and sends sound waves into the body; the echoes are converted to images. Ultrasound can examine the heart, liver, kidneys, blood vessels, and a developing fetus during pregnancy. It’s widely used because it doesn’t involve radiation and can reveal issues like gallstones, tumors or pregnancy status. Ultrasound images help doctors diagnose problems and guide treatments (for example, checking blood flow or guiding needle biopsies).",
        image: rl1
      },
      {
        title: "X-ray",
        color: "black",
        description:
          "X-ray imaging uses a small dose of ionizing radiation to create pictures of the inside of your body. Bones and teeth show up clearly, so X-rays are often used to check for fractures, joint issues or dental cavities. They also reveal conditions like pneumonia or lung tumors on chest X-rays. For an X-ray exam, you stand or lie still while a machine sends a narrow beam of X-rays through your body onto a detector. Dense tissues (bones) block more X-rays and appear white on the image, while softer tissues appear gray. Doctors interpret these images to diagnose injuries.",
        image: rl2
      },
      {
        title: "CT Scan",
        color: "black",
        description:
          "A CT scan is an imaging test that uses a series of X-ray images and a computer to create detailed cross-sectional pictures of your body. It provides high-resolution images of bones, organs and blood vessels. CT scans are painless and noninvasive. They are often used to detect injuries or diseases that may not appear on regular X-rays, such as tumors, internal bleeding, or blockages. A CT scan can reveal the size and shape of organs or abnormal growths, helping doctors diagnose conditions and plan treatments more accurately.",
        image: rl3
      },
      {
        title: "MRI",
        color: "black",
        description:
          "MRI is a diagnostic imaging test that produces high-resolution images of structures inside the body using powerful magnets and radio waves. It is painless and noninvasive, and does not use any ionizing radiation. During the exam, you lie on a table that slides into a cylindrical scanner. The strong magnetic field aligns hydrogen atoms in your body, and radio waves cause them to emit signals that are recorded. MRI is particularly good for viewing the brain, spinal cord, muscles and joints, helping doctors diagnose a wide range of conditions.",
        image: rl4
      }
    ]
  },

  Neurology: {
    intro: "Our neurodiagnostic suite features EEG, NCV, EMG, RNST, VEP, and BERA to map brain, nerve, and muscle function, identifying seizures, neuropathy, or hearing disorders for targeted neurological care.",
    services: [
      {
        title: "NCV",
        color: "black",
        description:
          "An NCV test measures how fast electrical signals travel along a nerve. Electrodes on the skin stimulate a nerve with small electrical pulses, and the responses are recorded. NCV shows how well the nerve conducts the impulse. This helps doctors identify nerve damage or disorders, such as neuropathies or carpal tunnel syndrome. NCV is typically performed when patients have unexplained numbness, tingling or weakness, as it pinpoints nerve injury or demyelination. Multiple nerves can be tested in one session to localize problems precisely.",
        image: nl1
      },
      {
        title: "EMG",
        color: "black",
        description:
          "EMG measures the electrical activity of muscles in response to nerve stimulation. A small needle electrode is inserted into a muscle, and muscle activity is recorded at rest and during voluntary movement. EMG tests how well nerves and muscles work together and provides information about muscle health. Doctors use EMG to detect neuromuscular problems. It can identify conditions like neuropathies (nerve disorders) or myopathies (muscle diseases) by revealing abnormal electrical patterns. EMG is often performed when patients have unexplained muscle weakness, twitching or numbness.",
        image: nl2
      },
      {
        title: "EEG",
        color: "black",
        description:
          "EEG is a test that records the electrical activity of the brain. Small electrode discs are placed on the scalp to measure brain wave patterns. EEG captures the electrical signals produced by brain cells when they communicate. It is commonly used to help diagnose conditions that affect brain function, such as epilepsy (seizure disorders), sleep disorders or brain inflammation. The test is painless and noninvasive, and the patient may rest or perform tasks (like reading or looking at lights) while the EEG records the brain’s activity.",
        image: nl3
      },
      {
        title: "RNST",
        color: "black",
        description:
          "RNST is an electrodiagnostic procedure used to assess the neuromuscular junction. During RNST, electrodes deliver a series of mild electrical pulses to a nerve, and the muscle response is recorded for each stimulus. The test evaluates how well signals are transmitted from nerve to muscle over repeated stimulation. RNST is commonly used to detect disorders like myasthenia gravis, where nerve-to-muscle signaling weakens after repeated use. If muscle responses decline over the series of stimulations, it indicates a transmission problem at the neuromuscular junction.",
        image: nl4
      },
      {
        title: "VEP",
        color: "black",
        description:
          "VEP is a test that measures the brain’s electrical response to visual stimuli. During a VEP, the patient looks at a pattern or flashing lights on a screen. Electrodes placed on the back of the head (over the visual cortex) record the brain waves that are produced in response. The test evaluates the visual pathways from the eyes to the brain. VEP can detect issues like optic nerve damage or lesions along the visual pathway, such as those seen in multiple sclerosis or unexplained vision loss.",
        image: nl5
      },
      {
        title: "BERA",
        color: "black",
        description:
          "BERA (also known as BAER) is a test that measures how the brainstem processes sound. In a BERA test, earphones play a series of clicking sounds while electrodes on the scalp record the brain’s electrical activity in response to each click. The resulting waveform shows how sound signals travel from the ear through the auditory nerve to the brainstem. BERA is used to detect hearing loss (especially in infants or uncooperative patients) and to identify issues with the auditory nerve or brain pathways that could affect hearing.",
        image: nl6
      }
    ]
  },

  Dental: {
    intro: "Our dental team delivers preventive cleanings, teeth whitening, orthodontics, root canals, and implants with advanced techniques and gentle care to protect oral health and create lasting, confident smiles.",
    services: [
      {
        title: "Root Canal",
        color: "black",
        description:
          "A root canal (endodontic therapy) is a dental procedure used to treat infection or inflammation in the pulp (the innermost soft tissue) of a tooth. The dentist or endodontist removes the infected pulp, cleans and disinfects inside the tooth, then fills and seals the canals. Usually a crown is placed afterward to restore the tooth’s shape and strength. Root canals relieve pain from deep decay or injury and save the natural tooth from extraction. With proper care, a tooth that has had a root canal can last a lifetime.",
        image: dn1
      },
      {
        title: "Teeth Whitening",
        color: "black",
        description:
          "Teeth whitening is a cosmetic dental procedure that removes stains and lightens the color of your teeth. It typically involves applying a peroxide-based bleaching gel to the tooth enamel. The gel penetrates and breaks up discoloration caused by food, drink or age. This can be done in a dental office (sometimes with a special light to speed results) or with custom trays for at-home use. The procedure brightens a smile by several shades, is generally safe when supervised by a dentist, and provides a quick confidence boost with minimal downtime.",
        image: dn2
      },
      {
        title: "Orthodontics",
        color: "black",
        description:
          "Orthodontics is the branch of dentistry that corrects the alignment of teeth and jaws using devices like braces or clear aligners. Braces are brackets and wires placed on the teeth that apply gentle pressure to move them into the correct position over time. This treatment addresses issues such as crooked, crowded or gapped teeth and bite problems. Orthodontic care improves how teeth fit together and function. It’s commonly used for children and adults alike. The result is a healthier, straighter smile that is easier to clean and less prone to dental problems.",
        image: dn3
      },
      {
        title: "Dental Implants",
        color: "black",
        description:
          "Dental implants are artificial tooth roots (usually titanium posts) that are surgically placed into the jawbone to replace missing teeth. Once the implant integrates with the bone, a dentist attaches a custom crown (or bridge/denture) on top. The result looks and functions like a natural tooth, allowing you to chew normally. Implants help maintain jawbone strength and prevent shifting of adjacent teeth. Although implant placement involves surgery and a healing period, with proper care an implant can last many years and often a lifetime.",
        image: dn4
      }
    ]
  },

  Dialysis: {
    intro: "Our dialysis center offers hemodialysis, peritoneal dialysis, HDF, and CAPD with personalized protocols, expert nursing, and continuous monitoring to maintain kidney function, balance fluids, and enhance patient comfort.",
    services: [
      {
        title: "Hemodialysis",
        color: "black",
        description:
          "Hemodialysis is a treatment for kidney failure that uses a machine and filter to clean waste and excess fluid from the blood. During the procedure, blood is taken from the body (through a vein access) and passed through an artificial kidney (dialyzer). The dialyzer removes toxins, extra salt and water from the blood, and the cleaned blood is returned to the body. This process helps control blood pressure and maintain the body’s electrolyte balance. Hemodialysis is usually done three times a week for several hours per session, in a dialysis center or at home.",
        image: ds1
      },
      {
        title: "Peritoneal Dialysis",
        color: "black",
        description:
          "Peritoneal dialysis is a home-based dialysis method that uses the lining of the abdomen (peritoneum) as a natural filter. A sterile dialysis fluid is introduced into the abdominal cavity through a catheter. Waste products and extra water from the blood pass through blood vessels in the peritoneal lining into the fluid. After a few hours of “dwelling,” the used fluid (with wastes) is drained and fresh fluid is put in. This exchange process is usually repeated several times a day. Peritoneal dialysis allows patients to manage their treatment at home without needing a machine.",
        image: ds2
      },
      {
        title: "Hemodiafiltration (HDF)",
        color: "black",
        description:
          "): Hemodiafiltration (HDF) is an advanced dialysis technique that combines the processes of hemodialysis and hemofiltration. In HDF, blood passes through an artificial kidney (dialyzer) like in regular hemodialysis, but large volumes of fluid are also removed and replaced during the session. This adds a convective filtration component, allowing removal of a broader range of waste molecules (including larger ones). HDF is done on specially equipped dialysis machines during routine dialysis appointments. It can provide enhanced clearance of toxins compared to standard hemodialysis.",
        image: ds3
      },
      {
        title: "Continuous Ambulatory Peritoneal Dialysis (CAPD)",
        color: "black",
        description:
          "CAPD is a form of peritoneal dialysis that does not require a machine. In CAPD, the patient manually performs dialysis fluid exchanges using gravity. A bag of sterile dialysate is hung overhead and allowed to flow into the abdominal cavity through the catheter. After several hours of dwelling, the fluid (with waste products) is drained by gravity into a drain bag. Each exchange takes about 30-40 minutes. CAPD is usually done about three to five times a day, allowing patients to move freely between exchanges.",
        image: ds4
      }
    ]
  },

  Dermatology: {
    intro: "Our dermatologists treat acne, psoriasis, perform skin biopsies, laser therapy, and chemical peels—tailoring each approach to restore healthy, radiant skin and address your unique dermatologic concerns.",
    services: [
      {
        title: "Acne Treatment",
        color: "black",
        description:
          ": Acne treatment includes various approaches to clear or reduce breakouts and prevent scarring. It typically starts with good skin care (gentle cleansers) and over-the-counter products to reduce oil and bacteria. Doctors may prescribe topical medications (like benzoyl peroxide, retinoid creams or antibiotics) or oral medications (antibiotics, hormonal treatments, isotretinoin) depending on acne severity. In-office procedures, such as extractions, chemical peels or light/laser therapy, can also help unclog pores and fade scars. Effective acne care targets oil control, inflammation reduction and bacteria, leading to clearer skin and improved confidence.",
        image: dl1
      },
      {
        title: "Psoriasis Care",
        color: "black",
        description:
          "Psoriasis care focuses on managing a chronic skin condition that causes red, scaly patches. Treatments aim to reduce skin inflammation, scaling and discomfort. Topical therapies (like steroid creams, vitamin D ointments or moisturizers) are often first steps. In-office options include light therapy (UVB phototherapy) to slow the rapid skin cell growth. For more severe cases, doctors may prescribe oral or injected medications (like methotrexate or biologic drugs) that suppress the overactive immune response. A good psoriasis care plan includes regular skin moisturization and avoiding triggers to improve skin appearance and comfort.",
        image: dl2
      },
      {
        title: "Skin Biopsy",
        color: "black",
        description:
          "A skin biopsy is a procedure where a small sample of skin is removed and sent to a lab for examination. This is often done when a dermatologist suspects a particular condition (such as skin cancer, infection or an unusual rash) and needs confirmation. Depending on the case, the doctor may shave off a thin layer of skin, punch out a circular piece, or cut out a larger sample. The tissue is then analyzed microscopically. Skin biopsies provide definitive information about skin issues, helping guide appropriate treatment. The procedure is quick and typically done in the clinic with local anesthesia.",
        image: dl3
      }
      ,
      {
        title: "Laser Therapy",
        color: "black",
        description:
          "Laser therapy in dermatology uses focused beams of light to treat various skin concerns. Different types of lasers target different tissues: some are used to remove unwanted hair by destroying hair follicles, while others are used to reduce wrinkles, scars or stretch marks by stimulating collagen production beneath the skin. Vascular lasers target red or brown discolorations (like rosacea, spider veins or pigmented lesions) by delivering light absorbed by blood or pigment. Laser treatments are typically quick and precise. They can significantly improve skin texture, tone or hair removal, though multiple sessions may be needed.",
        image: dl4
      }
    ]
  },

  Homecare: {
    intro: "Our homecare team provides in‑home nursing, physiotherapy, and palliative services with compassionate support, medication management, mobility exercises, and symptom relief to enhance comfort and independence.",
    services: [
      {
        title: "Nursing Services",
        color: "black",
        description:
          "Nursing services at home provide professional medical care in a patient’s own home. Licensed nurses visit or stay with patients to perform tasks like administering medications or IV fluids, changing dressings, monitoring vital signs and managing treatments. They also educate patients and families about care routines, diet and exercise needed for recovery or chronic conditions. Home nursing helps people recuperate after surgery or during illness in a familiar environment. This service ensures proper medical support outside the hospital, improving comfort and continuity of care.",
        image: hc1
      },
      {
        title: "Physiotherapy",
        color: "black",
        description:
          "Physiotherapy (physical therapy) in homecare involves a trained therapist working with patients at home to improve mobility and function. The therapist designs personalized exercise programs, performs hands-on treatments (like massage or joint mobilization) and advises on posture and body mechanics. Therapy can include balance training, strength exercises, or use of assistive devices. Home physiotherapy is commonly used to help people recover from injuries or surgeries (such as knee replacement), or to manage chronic conditions like arthritis or after a stroke. Regular sessions help patients regain independence and reduce pain in daily activities.",
        image: hc2
      },
      {
        title: "Palliative Care",
        color: "black",
        description:
          "Palliative care in the home is specialized medical care for people with serious illnesses, focusing on relieving symptoms and stress to improve quality of life. The home care team includes doctors, nurses and other specialists who work with your regular medical providers. They help manage pain, nausea, breathing difficulties and other symptoms, and provide emotional and practical support to patients and families. Palliative care can be offered alongside curative treatments at any stage of illness. Its goal is to improve comfort, help patients live as actively as possible, and support family members during difficult times.",
        image: hc3
      }
    ]
  },

  Ophthalmology: {
    intro: "Our ophthalmologists perform cataract surgery, LASIK, glaucoma screening, and retinal imaging using state‑of‑the‑art technology and personalized care to preserve vision and sharpen visual clarity.",
    services: [
      {
        title: "Cataract Surgery",
        color: "black",
        description:
          "Cataract surgery is a minimally invasive procedure designed to remove the clouded lens of the eye and replace it with a clear artificial intraocular lens. Performed under local anesthesia, the surgeon uses a tiny incision and high‑frequency ultrasound (phacoemulsification) to break up and extract the opaque lens. This restores light transmission and dramatically improves vision, reducing glare and halos around lights. Recovery is typically rapid, with most patients experiencing clearer sight within days. Postoperative care includes protective eyewear, eye drops to prevent infection and inflammation, and follow‑up visits to monitor healing and optimal lens positioning.",
        image: om1
      },
      {
        title: "Glaucoma Screening",
        color: "black",
        description:
          " Glaucoma screening is a series of painless diagnostic tests to detect early signs of optic nerve damage and increased intraocular pressure, which can lead to irreversible vision loss. These evaluations include tonometry to measure eye pressure, ophthalmoscopy to inspect the optic nerve, perimetry (visual field testing) to assess peripheral vision, and pachymetry to gauge corneal thickness. By combining these assessments, eye specialists identify glaucoma risk factors before symptoms appear. Early detection allows timely initiation of treatment—such as medicated eye drops, laser therapy, or surgery—to slow disease progression and preserve long‑term visual function.",
        image: om2
      },
      {
        title: "LASIK",
        color: "black",
        description:
          "LASIK (Laser-Assisted In Situ Keratomileusis) is an advanced laser vision correction procedure that reshapes the cornea to correct refractive errors such as myopia, hyperopia, and astigmatism. During LASIK, a thin corneal flap is created and gently lifted; an excimer laser then removes precise amounts of tissue to alter the cornea’s curvature. The flap is repositioned, acting like a natural bandage. The outpatient surgery takes only minutes per eye and typically causes minimal discomfort. Most patients notice improved vision within 24 hours and achieve 20/20 vision or better without glasses or contacts, enhancing daily activities and quality of life.",
        image: om3
      }
      ,
      {
        title: "Retinal Imaging",
        color: "black",
        description:
          "Retinal imaging encompasses high‑resolution photography and scanning technologies—such as optical coherence tomography (OCT) and fundus photography—to capture detailed images of the retina, macula, and optic nerve. These noninvasive tests allow ophthalmologists to visualize the layers of retinal tissue, detect fluid accumulation, hemorrhages, or early degenerative changes, and monitor blood vessel abnormalities. Retinal imaging is essential for diagnosing and managing conditions like diabetic retinopathy, age‑related macular degeneration, and retinal vein occlusions. Results guide timely interventions—such as laser therapy, injections, or surgery—and enable precise tracking of disease progression over serial exams, protecting visual health.",
        image: om4
      }
    ]
  },

  Physiotherapy: {
    intro: "Our physiotherapists employ manual therapy, electrotherapy, and exercise programs tailored to your needs—reducing pain, improving joint mobility, rebuilding strength, and empowering you to achieve lasting functional independence.",
    services: [
      {
        title: "Manual Therapy",
        color: "black",
        description:
          "Manual therapy comprises hands‑on techniques—such as joint mobilization, soft tissue massage, myofascial release, and manipulation—applied by a trained physiotherapist to alleviate pain, restore joint mobility, and improve tissue flexibility. By targeting restrictions in muscles, tendons, ligaments, and joint capsules, manual therapy reduces stiffness and promotes circulation, facilitating the body’s natural healing processes. Therapists assess movement patterns, identify dysfunctional areas, and apply precise pressure or stretching motions to realign structures and decrease muscle tension. Integrated with therapeutic exercises, manual therapy helps patients recover from injuries, manage chronic musculoskeletal conditions, and enhance physical performance.",
        image: pt1
      },
      {
        title: "Electrotherapy",
        color: "black",
        description:
          "Electrotherapy uses controlled electrical currents delivered through skin‑surface electrodes to stimulate nerves and muscles, modulate pain, and accelerate tissue healing. Modalities include TENS (transcutaneous electrical nerve stimulation) for pain relief, NMES (neuromuscular electrical stimulation) to activate weakened muscles, and interferential therapy to address deep‑tissue discomfort. By influencing nerve conduction and blood flow, electrotherapy reduces inflammation, eases muscle spasms, and promotes nutrient delivery to injured areas. Sessions are customized in intensity, frequency, and duration according to individual needs. Often combined with exercise and manual techniques, electrotherapy supports rehabilitation following surgery, injury, or in managing chronic pain syndromes.",
        image: pt2
      },
      {
        title: "Exercise Therapy",
        color: "black",
        description:
          "Exercise therapy involves personalized movement programs designed to restore strength, flexibility, balance, and endurance under the guidance of a physiotherapist. After a thorough assessment, therapists prescribe targeted exercises—such as stretching, resistance training, proprioceptive drills, and functional activities—that address specific impairments and functional goals. Progressive exercise loads encourage tissue remodeling, joint stability, and cardiovascular fitness. Patients learn proper form, posture, and body mechanics to prevent reinjury and optimize daily performance. Regular, supervised sessions are complemented by home‑exercise regimens, empowering individuals to manage chronic conditions (like arthritis), recover from orthopedic surgery, or rehabilitate sports injuries with measurable, long‑term gains.",
        image: pt3
      }
    ]
  },
};

export default ServiceData;
