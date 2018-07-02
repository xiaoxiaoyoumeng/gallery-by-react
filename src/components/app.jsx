import React,{Component} from 'react'

import imageDatas from '../data/imageDatas'

function getImageURL(imageDatasArr) {
    for (var i=0;i<imageDatasArr.length;i++){
        var singleImageData=imageDatasArr[i];
        singleImageData.imageURL=singleImageData.filename;
        imageDatasArr[i]=singleImageData
    }
    return imageDatasArr
}

let imageDatass=getImageURL(imageDatas)
export default class App extends Component {
    render(){
        return (
            <div>
                <section className='stage'>
                    <section className='img-sec'>
                        <nav className='controller-nav'></nav>
                    </section>
                </section>
            </div>
        )
    }
}