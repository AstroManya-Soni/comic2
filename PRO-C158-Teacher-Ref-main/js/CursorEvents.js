AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleClickEvents()
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handleClickEvents:function(){
    this.el.addEventListener('click',event=>{
      const comicContainer=document.querySelector('#comic-container')
      const {state}=comicContainer.getAttribute('banner')
      if(state==='comic-list'){
        const id=this.el.getAttribute('id')
        const comicId=['avengers', 'blackP', 'marvelC', 'spiderM']
        if(comicId.includes(id)){
          comicContainer.setAttribute('banner',{
            state:'view',selectedCard:id
          })
        }
      }
    })
  },
  handleComicListState: function () {
    const id = this.el.getAttribute("id");
    const comicId = ['avengers', 'blackP', 'marvelC', 'spiderM'];
    if (comicId.includes(id)) {
      const comicContainer = document.querySelector("#comic-container");
      comicContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handleComicListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },
});
