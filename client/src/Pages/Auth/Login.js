import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import im from "../../images/A_Algorithm_Fig2.png"
import sc from "../../images/ida-star.gif"
import "./login.css"
import Dj from "../../images/Dijkstra_Animation.gif"
import df from "../../images/Depth-First-Search.gif"
import dfs from "../../images/Graph-BFS.gif"
import dd from "../../images/downloadd.gif"
import i18n from '../../118n'
import { useTranslation } from 'react-i18next'

const { Header, Content, Footer } = Layout;


const Login = () => {
	const {t}=useTranslation();

	return ( <body >

	
		<div class="container" >
	
		  <div class="blog-header">
			<h1 class="blog-title" style={{textAlign:'center',padding:"10px"}}>		{t('navbar.Sea')}
			</h1>
		  </div>
	
		  <div class="row">
	
			<div class="col-sm-12 blog-main">
	
			  <div class="blog-post" >
				<h2 class="blog-post-title">A* Search Algorithm</h2>
				<div style={{padding:"10px"}}>
				In games we often want to find paths from one location to another. 
				We’re not only trying to find the shortest distance; we also want to take into account travel time. 
				A* was initially designed as a graph traversal problem, to help build a robot that can find its own course.
				 It still remains a widely popular algorithm for graph traversal, it searches for shorter paths first, 
				 thus making it an optimal and complete algorithm. An optimal algorithm will find the least cost outcome for a problem,
				  while a complete algorithm finds all the possible outcomes of a problem, 
				  the Algorithm calculates the cost to all its immediate neighboring nodes, and chooses the one incurring the least cost.
				   This process repeats until no new nodes can be chosen and all paths have been traversed. 
				   Then, you should consider the best path among them. If f(n) represents the final cost, then it can be denoted as :
				   <div>
				   <div style={{padding:"10px",fontSize:"20px",fontWeight:"bold"}}>				   f(n) = g(n) + h(n), where :
				   </div>
				   <div style={{padding:"10px",fontSize:"15px"}}>g(n) = cost of traversing from one node to another. This will vary from node to node
				   </div>
				   <div style={{padding:"10px",fontSize:"15px"}}>h(n) = heuristic approximation of the node's value. This is not a real value but an approximation cost
				   </div>
</div>
				   </div>
				   <h4>how does A* works?</h4>
				   <div style={{textAlign:"center"}}>				 
				     <img src={im} ></img>
				   </div>
				   <div>
				   <p>Consider the weighted graph depicted above, which contains nodes and the distance between them. Let's say you start from A and have to go to D.
				   </p>
<p>				   Now, since the start is at the source A, which will have some initial heuristic value. Hence, the results are
</p>
				   <p style={{fontWeight:"bold"}}>	 f(A) = g(A) + h(A)
				   </p>
				   <p  style={{fontWeight:"bold"}}>f(A) = 0 + 6 = 6
				   </p>
				   <p> Next, take the path to other neighbouring vertices :
				   </p>
				   <p style={{fontWeight:"bold"}}>				   f(A-B) = 1 + 4
				   </p>
				   <p style={{fontWeight:"bold"}}>				   f(A-C) = 5 + 2
				   </p>
				   
				   <p>				   Now take the path to the destination from these nodes, and calculate the weights :
				   </p>
				   <p style={{fontWeight:"bold"}}>				   f(A-B-D) = (1+ 7) + 0
				   </p>
				   <p style={{fontWeight:"bold"}}>				   f(A-C-D) = (5 + 10) + 0
				   </p>
				   <p></p>
				   <div>				   It is clear that node B gives you the best path, so that is the node you need to take to reach the destination.
				   </div>
				   <div  style={{textAlign:"center",paddingTop:"20px"}} >				 
				   <img src={sc} className='photo img-fluid' class="img-fluid" ></img>
				 </div>
				   
				   </div>


			   
			  </div>
			  <div class="blog-post" >
			  <h2 class="blog-post-title"> Dijkstra’s Algorithm</h2>
			  <div style={{padding:"10px"}}>
			  One algorithm for finding the shortest path from a starting node to a target node in a weighted graph is Dijkstra’s algorithm. The algorithm creates a tree of shortest paths from the starting vertex, the source, to all other points in the graph.

			  Dijkstra’s algorithm, published in 1959 and named after its creator Dutch computer scientist Edsger Dijkstra, can be applied on a weighted graph. The graph can either be directed or undirected. One stipulation to using the algorithm is that the graph needs to have a nonnegative weight on every edge.
			  The core idea of the Dijkstra algorithm is to continuously eliminate longer paths between the starting node and all possible destinations.

To keep track of the process, we need to have two distinct sets of nodes, settled and unsettled.

Settled nodes are the ones with a known minimum distance from the source. The unsettled nodes set gathers nodes that we can reach from the source, but we don't know the minimum distance from the starting node
			  
				
				 </div>
				 <h4 style={{padding:"10px"}}>how does Dijkstra’s works?</h4>
				 <div style={{textAlign:"center"}}>				 
				   <img src={Dj} class="img-fluid" ></img>
				 </div>
				 <div>
				 <div>				 <h4 style={{padding:"10px"}}>difference between A* and Dijkstra</h4>
				 <p>A* is just like Dijkstra, the only difference is that A* tries to look for a better path by using a heuristic function which gives priority to nodes that are supposed to be better than others while Dijkstra's just explore all possible paths</p>
				 </div>

				

				
			   
				 
				 </div>


			 
			</div>
			<div class="blog-post" >
			<h2 class="blog-post-title"> depth first search algorthim</h2>
			<div style={{padding:"10px"}}>
			The DFS algorithm is a recursive algorithm that uses the idea of backtracking. It involves exhaustive searches of all the nodes by going ahead, if possible, else by backtracking.

			Here, the word backtrack means that when you are moving forward and there are no more nodes along the current path, you move backwards on the same path to find nodes to traverse. All the nodes will be visited on the current path till all the unvisited nodes have been traversed after which the next path will be selected.
			
			This recursive nature of DFS can be implemented using stacks. The basic idea is as follows:
			Pick a starting node and push all its adjacent nodes into a stack.
			Pop a node from stack to select the next node to visit and push all its adjacent nodes into a stack.
			Repeat this process until the stack is empty. However, ensure that the nodes that are visited are marked. This will prevent you from visiting the same node more than once. If you do not mark the nodes that are visited and you visit the same node more than once, you may end up in an infinite loop.
			  
			   </div>
			   <h4 style={{padding:"10px"}}> how does DFS algorthim works?</h4>
			   <div style={{textAlign:"center"}}>				 
				 <img src={df} class="img-fluid" ></img>
			   </div>
			   <div>
			 

			  
			 
			   
			   </div>


		   
		  </div>
		  <div class="blog-post" >
		  <h2 class="blog-post-title">  Breadth–first search (BFS)</h2>
		  <div style={{padding:"10px"}}>
		  Breadth–first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a ‘search key’) and explores the neighbor nodes first before moving to the next-level neighbors.
		  BFS is the most common approach to traverse a graph and the primary use is for finding the shortest path through a graph. BFS is a traversing algorithm, in which you begin traversing from a selected node (often referred to as the starting or source node) and proceed through the graph by layer — visiting all the nodes neighboring the source node prior to moving to the next level of nodes. In other words, the nodes of the graph are explored horizontally, with all nodes of the current layer visited and then moving to the next layer.	
			 </div>
			 <h4 style={{padding:"10px"}}> how does BFS algorthim works?</h4>

			 <div style={{textAlign:"center"}}>				 
			   <img src={dfs} class="img-fluid" ></img>
			 </div>
			 <div>
		   

			
		   
			 
			 </div>


		 
		</div>
		<div class="blog-post" >
		<h2 class="blog-post-title">  difference between DFS and BFS</h2>
		<div style={{padding:"10px"}}>
		BFS stands for Breadth First Search is a vertex based technique for finding a shortest path in graph. It uses a Queue data structure which follows first in first out. In BFS, one vertex is selected at a time when it is visited and marked then its adjacent are visited and stored in the queue. It is slower than DFS. 
		<div>DFS stands for Depth First Search is a edge based technique. It uses the Stack data structure, performs two stages, first visited vertices are pushed into stack and second if there is no vertices then visited vertices are popped.
		</div>
		   </div>
		   <div style={{textAlign:"center"}}>				 
			 <img src={dd} class="img-fluid" ></img>
		   </div>
		   <div>
		 

		  
		 
		   
		   </div>


	   
	  </div>
	  <div class="blog-post" >
		<h2 class="blog-post-title">  Refrencess used</h2>
		<div style={{padding:"10px"}}>
		<div><a href='https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/' target="_blank">geeksforgeeks</a></div>
		<div><a href='https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/tutorial/' target="_blank">hackerearth</a></div>


		<div><a href='https://www.codingame.com/playgrounds/1608/shortest-paths-with-dijkstras-algorithm/dijkstras-algorithm' target="_blank">codingame</a></div>
		<div><a href='https://www.programiz.com/dsa/dijkstra-algorithm' target="_blank">programiz</a></div>
		<div><a href='https://www.simplilearn.com/tutorials/artificial-intelligence-tutorial/a-star-algorithm' target="_blank">Simplilearn</a></div>
		<div>
		</div>
		   </div>
		   
		  


	   
	  </div>
  
			
			</div>
	
		
	
		  </div>
	
		</div>
	
		
	
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="../../dist/js/bootstrap.min.js"></script>
		<script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
	  
	
	</body>)
};
export default Login;

