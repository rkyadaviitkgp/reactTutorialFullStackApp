import React from 'react';
import { useState, useEffect } from 'react';
import './MemoryList.css';

export default function MemoryList() {
  const [memories, setMemories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(getAllMemories, []);
  function getAllMemories(){
    console.log("Get all Memories");
  }
  return (
    <div>
      <h1>MemoryList</h1>
    </div>
  )
}