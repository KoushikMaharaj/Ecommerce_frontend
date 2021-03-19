import React, { Component } from "react";
import "./NavBar.css";
import service from "../../services/productSevice";

class NavBar extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    service.getAllCategories().then((response) => {
      console.log(response.data);
      const categories = response.data;
      this.setState({ categories });
    });
  }
  render() {
    /*  return ( <div class="menu-bar">
        <ul class="">
            <li><a href="#"><b>Motherboard</b></a>
            <div class="sub-menu-1">
                <ul>
                    <li class="hover-me"><a href="#">Asus</a><i class ="fa fa-angle-right"></i>
                    
                    
                       <div class="sub-menu-2">
                           <ul>
                       
                        <li><a href="#">Zotac</a></li>
                         <li><a href="#">Gigabyte</a></li>
                       
                       </ul>
                       
                       
                       </div>
                    
                    
                    </li>
                     <li class="hover-me"><a href="#">Gigabyte</a><i class ="fa fa-angle-right"></i>
                    
                       <div class="sub-menu-2">
                           <ul>
                       
                        <li><a href="#">Zotac</a></li>
                         <li><a href="#">Gigabyte</a></li>
                       
                       </ul>
                       
                       
                       </div>
                    
                    
                    </li>  
                </ul>
            
            
            
            </div>
            </li>
            <li><a href="#"><b>Processor</b></a>
                <div class="sub-menu-1">
            <ul>
            
                   <li class="hover-me"><a href="#">Intel</a><i class ="fa fa-angle-right"></i>
                       <div class="sub-menu-2">
                           <ul>
                       
                        <li><a href="#">Zotac</a></li>
                         <li><a href="#">Gigabyte</a></li>
                       
                       </ul>
                       
                       
                       </div>
                
                
                
                
                
                </li>
                     <li class="hover-me"><a href="#">Amd</a><i class ="fa fa-angle-right"></i>
                
                   <div class="sub-menu-2">
                           <ul>
                       
                        <li><a href="#">Zotac</a></li>
                         <li><a href="#">Gigabyte</a></li>
                       
                       </ul>
                       
                       
                       </div>
                
                </li>
            
            </ul>
                     </div>
                </li>
            <li><a href="#"><b>Graphic</b></a>
                <div class="sub-menu-1">
            <ul>
            
                   <li class="hover-me"><a href="#">Zotac</a><i class ="fa fa-angle-right"></i>
                
                
                   <div class="sub-menu-2">
                           <ul>
                       
                        <li><a href="#">Zotac</a></li>
                         <li><a href="#">Gigabyte</a></li>
                       
                       </ul>
                       
                       
                       </div>
                
                </li>
                     <li class="hover-me"><a href="#">Gigabyte</a><i class ="fa fa-angle-right"></i>
                
                   <div class="sub-menu-2">
                           <ul>
                       
                        <li><a href="#">Zotac</a></li>
                         <li><a href="#">Gigabyte</a></li>
                       
                       </ul>
                       
                       
                       </div>
                
                
                
                </li>
            
            </ul>
                     </div>
                </li>
            
            <li><a href="#"><b>Moniter</b></a>
                <div class="sub-menu-1">
            <ul>
            
                   <li class="hover-me"><a href="#">Msi</a><i class ="fa fa-angle-right"></i>
                
                   <div class="sub-menu-2">
                           <ul>
                       
                        <li><a href="#">Zotac</a></li>
                         <li><a href="#">Gigabyte</a></li>
                       
                       </ul>
                       
                       
                       </div>
                
                
                
                </li>
                     <li class="hover-me"><a href="#">Asus</a><i class ="fa fa-angle-right"></i>
                
                
                
                
                
                   <div class="sub-menu-2">
                           <ul>
                       
                        <li><a href="#">Zotac</a></li>
                         <li><a href="#">Gigabyte</a></li>
                       
                       </ul>
                       
                       
                       </div></li>
            
            </ul>
                     </div>
                </li>
  
  
</ul>
            </div>

         );*/
    const { categories } = this.state;
    return (<React.Fragment>
      <div className="menu-bar">
        <ul>{categories.map((category)=>(
          <li key={category.id}><a href="$">{category.ctgName}</a></li>
        ))}</ul>
      </div>
    
    </React.Fragment>)
  }
}

export default NavBar;
