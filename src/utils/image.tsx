 

const imageProcess = (imageData:any) => {
 
    const formData = new FormData()
    formData.append('image', imageData)




    fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
        method: 'POST',
        body: FormData
    })
        .then(res => res.json())
        .then(res => {
            if (res.data?.url) {
                return res.data.url
            }
        })
};

export default imageProcess;