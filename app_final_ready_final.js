// app_final_ready.js - Updated to work with firebase_final_ready_final.js
// Ensure firebase_final_ready_final.js is loaded before this script

const form = document.getElementById('applicationForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nid = document.getElementById('nid').value.trim();
    if(!nid) return alert('الرقم القومي مطلوب!');

    // Prepare data object
    const data = {};
    Array.from(form.elements).forEach(el => {
        if(el.id && el.type !== 'file') {
            data[el.id] = el.value;
        }
    });

    try {
        // Upload files
        const files = ['idFront','idBack','personalPhoto','degreeCert','policeRecord','workCard'];
        for(const f of files) {
            const fileInput = document.getElementById(f);
            if(fileInput && fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const storageRef = storage.ref(`applications/candidates/${nid}/${file.name}`);
                await storageRef.put(file);
                data[f] = await storageRef.getDownloadURL();
            }
        }

        // Save data to Firestore
        await db.collection('applications').doc('candidates').collection(nid).doc('info').set(data);

        // Success feedback
        alert('تم إرسال الطلب بنجاح!');
        form.reset();

    } catch(err) {
        console.error(err);
        alert('حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.');
    }
});
