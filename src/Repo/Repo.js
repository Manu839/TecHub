
import { useEffect, useState } from 'react';
import './html.css';
import { storage } from "../firebaseee"
import { uuidv4 } from '@firebase/util'
import {
    deleteObject,
    getDownloadURL,
    listAll,
    ref, uploadBytesResumable,
} from "firebase/storage"
import Navbar from '../Navbar/Navbar';


function Repoo() {
    const [image, setImage] = useState(null);
    const [imglist, setImglist] = useState([]);
    const [progress, setProgress] = useState(0);
    const imageListRef = ref(storage, "img/")

    // Upload file
    const uploadFile = () => {
        if (image == null) return;

        const imageRef = ref(storage, `img/${image.name + uuidv4()}`)
        const uploadFile = uploadBytesResumable(imageRef, image);

        uploadFile.on('state_changed', (snapshot) => {
            const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setProgress(progress)
        }, (err) => {

        }, () => {
            setProgress(0);
            getDownloadURL(uploadFile.snapshot.ref).then((url) => {
                setImglist((prev) => [...prev, { url: url, ref: uploadFile.snapshot.ref }])
            })
            alert("File uploaded Successfully :)👌")
        });
        setImage(null)
    }


    // Delete file
    const deleteHandel = (ref, url) => {
        deleteObject(ref).then((res) => {
            setImglist(imglist.filter((img) => img.url !== url))
            alert("Successfully deleted")
        })
    }

    // Get data
    useEffect(() => {
        const getData = () => {
            listAll(imageListRef).then((res) => {
                res.items.map((item) => {
                    getDownloadURL(item).then((url) => {
                        setImglist((prev) => [...prev, { url: url, ref: item }])
                    })
                })
            })
        }
        getData()
    }, [])


    return (
        <>
            <Navbar />
            <div class="file-upload">
                <button class="file-upload-btn" onClick={uploadFile} type="button">upload</button>

                <div class="image-upload-wrap">
                    <div class="drag-text">
                        <input class="file-upload-input" type="file" className="form-control"
                            id="img-upload"
                            accept="image/*"
                            onChange={(event) => {
                                setImage(event.target.files[0])
                            }} />
                        <h3>Drag and drop a file or select add File</h3>
                    </div>
                </div>
                <p class='upload'>Uploaded Projects are</p>
                {imglist && imglist.map((fileobj) => (
                    <div class='divv'>
                        <img class="file-upload-image" src={fileobj.url} alt="your image" />
                        <div class="image-title-wrap">
                            <button type="button" onClick={() => deleteHandel(fileobj.ref, fileobj.url)} class="remove-image">Delete <span class="image-title"></span></button>
                        </div>
                    </div>

                ))}
            </div>

        </>
    );
}
export default Repoo;







