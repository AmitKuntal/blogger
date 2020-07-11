import React from 'react';
import {connect} from 'react-redux';
import Tag from './../components/tag';

function Tags(props) {
    var count =0;
  return (
        <div className="w-full flex justify-center">
            <div className="container w-full md:w-4/5 flex flex-wrap items-center justify-center p-4 text-black bg-black-200 table-auto">      
                {['Future','OneZero', 'Technology', 'Elemental', 'Health', 'Science','GEN', 'Business', 'Marker',
                'Work','Culture','ZORA', 'Tenderly','Food','Heated', 'Programming','Design','LGBTQIA','Neuroscience',
                 'Modus', 'Politics','Relationships','Human Part', 'Self', 'Startups','Cryptocurrency','Forge',
                 'Data Science', 'Productivity', 'Artificial Intelligence', 'Election 2020'].map(tag=><Tag name={tag} count = {count+=1} />)} 
            </div>
        </div>
    );
}

const mapStateToProps =(state)=>{
    return{
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        changeName:()=>{dispatch({})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tags);
