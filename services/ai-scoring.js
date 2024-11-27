const { GoogleGenerativeAI } = require("@google/generative-ai")

exports.aiCalScore = async (formData, language) => {
    try {
        const genAI = new GoogleGenerativeAI(`${process.env.GOOGLE_GEMINI}`)

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
        });

        let prompt = ""
        if (language == 'en') {
            prompt = `
        Given the following details, evaluate the suitability of the person to adopt a pet:
        Career: ${formData.career}
        Work Time: ${formData.workTime} hours/day
        Day Off: ${formData.dayOff} days/week
        Salary: ${formData.salary} per month
        Date of Birth: ${formData.dateOfBirth}
        Current Pet Count: ${formData.currentPetCount}
        Family Member Count: ${formData.familyMemberCount}
        Does family always stay home: ${formData.familyAlwaysHome}
        Pet will be alone for: ${formData.petWillaloneHours} hours/day
        Housing Type: ${formData.housingType}
        Has a garden: ${formData.hasGarden}
        Has a fence: ${formData.hasFence}
        Can walk dog: ${formData.canWalkDog}
        Reason for wanting to adopt a pet: ${formData.reasonToAdopt}
        
        Please provide a score from 1-100 based on the suitability for adopting a pet.
        
        Just give me in using this JSON schema 
        message = {'shortDetail':string, 'score':string} 
        `;
        } else {
            prompt = `
        พิจารณาความเหมาะสมของบุคคลในการรับเลี้ยงสัตว์จากข้อมูลดังนี้:
        
        - อาชีพ: ${formData.career}
        - เวลาทำงานเวลา: ${formData.workTime} /วัน
        - วันหยุด: ${formData.dayOff} วัน/สัปดาห์
        - เงินเดือน: ${formData.salary} ต่อเดือน
        - วันเกิด: ${formData.dateOfBirth}
        - จำนวนสัตว์เลี้ยงที่มีตอนนี้: ${formData.currentPetCount}
        - จำนวนสมาชิกในครอบครัว: ${formData.familyMemberCount}
        - ครอบครัวอยู่บ้านตลอดเวลา: ${formData.familyAlwaysHome}
        - เวลาที่สัตว์เลี้ยงจะอยู่คนเดียว: ${formData.petWillaloneHours} ชั่วโมง/วัน
        - ประเภทที่อยู่อาศัย: ${formData.housingType}
        - มีสวน: ${formData.hasGarden}
        - มีรั้ว: ${formData.hasFence}
        - สามารถพาสุนัขเดินเล่นได้หรือไม่: ${formData.canWalkDog}
        - เหตุผลในการรับเลี้ยงสัตว์: ${formData.why}
        
        โปรดให้คะแนนความเหมาะสมในการรับเลี้ยงสัตว์จาก 1-100 ตามปัจจัยต่างๆ เช่น ตารางเวลาทำงาน, สถานการณ์ครอบครัว, การอยู่อาศัย, สถานะทางการเงิน, และความสามารถในการดูแลสัตว์เลี้ยง
        
        ตอบในรูปแบบ JSON ดังนี้:
        message = {'shortDetail':string, 'score':string} 
        `;
        }

        const result = await model.generateContent(prompt);
        const outPut = await result.response.text()
        const cleanJson = outPut.replace(/```json\n|\n```/g, '');

        return JSON.parse(cleanJson)

    } catch (err) {
        console.log('Error during AI request:', err);
        return err;
    }
};
