const $ = window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray==='string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements= selectorOrArray
    }
    
    //api 可以操作elements
    return {
       
        addClass(className){
            this.each(node=>node.classList.add(className))
        }, 
        find(selector){
            let array = []
            this.each(node=>{
                array.push(...node.querySelectorAll(selector))
            })
            return jQuery(array)
        },
        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this
        },
        parent(){
            const array=[]
            this.each((node)=>{
                if(array.indexOf(node.parentNode)===-1){
                    array.push(node.parentNode)
                }else{

                }
                
            })
            return jQuery(array)
        },
        children(){
            const array = []
            this.each((node)=>{
            array.push(...node.children)

            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        }
    }
   
}