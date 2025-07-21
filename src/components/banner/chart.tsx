'use client'

import Image from 'next/image'
import React from 'react'
import ReactFlow, {
    useNodesState,
    useEdgesState,
    Position,
} from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
    {
        id: 'streamverse',
        position: { x: 550, y: 150 },
        data: {
        label: <Image src="/StreamVerse.svg" alt="StreamVERSE" className="drop-shadow-[0_0_10px_#c6ff00]" width={173} height={172} />,
        },
        sourcePosition: Position.Left,
        targetPosition: Position.Left,
        style: { background: 'transparent', border: 'none', padding: '0' },
    },
    {
        id: 'youtube',
        position: { x: 10, y: 160 },
        data: {
        label: <Image src="/YT.svg" alt="YouTube" width={122} height={122} />,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Right,
        style: { background: 'transparent', border: 'none', padding: '0', width: '122px', height: '122px' },
    },
    {
        id: 'facebook',
        position: { x: 1100, y: 160 },
        data: {
        label: <Image src="/Facebook.svg" alt="Facebook" width={122} height={122} />,
        },
        sourcePosition: Position.Left,
        targetPosition: Position.Left,
        style: { background: 'transparent', border: 'none', padding: '0', width: '122px', height: '122px' },
    },
    // Phantom midpoint nodes
    {
        id: 'yt-branch',
        position: { x: 550, y: 215 },
        data: { label: <></> },
        style: { width: 0, height: 0, background: 'transparent', border: 'none' },
        sourcePosition: Position.Left,
        targetPosition: Position.Left,
    },
    {
        id: 'fb-branch',
        position: { x: 680, y: 215 },
        data: { label: <></> },
        style: { width: 0, height: 0, background: 'transparent', border: 'none' },
        sourcePosition: Position.Right,
        targetPosition: Position.Right                   ,
    },
    {
        id: 'tiktok',
        position: { x: 130, y: 70 },
        data: { label: <Image src="/TikTok.svg" alt="Tiktok" width={81} height={81} className='w-full h-full'/> },
        style: { background: 'transparent', border: 'none', padding: '0px', width: '81px', height: '81px' },
        sourcePosition: Position.Right,
        targetPosition: Position.Right,
    },
    {
        id: 'twitch',
        position: { x: 250, y: 280 },
        data: { label: <Image src="/Twitch.svg" alt="Twitch" width={108} height={108} /> },
        style: { background: 'transparent', border: 'none', padding: '0', width: '108px', height: '108px' },
        sourcePosition: Position.Right,
        targetPosition: Position.Right,
    },
    {
        id: 'bigo',
        position: { x: 1000, y: 70 },
        data: { label: <Image src="/Bigo.svg" alt="Bigo" width={95} height={95} /> },
        style: { background: 'transparent', border: 'none', padding: '0', width: '95px', height: '95px' },
        sourcePosition: Position.Left,
        targetPosition: Position.Left,
    },
    {
        id: 'instagram',
        position: { x: 930, y: 280 },
        data: { label: <Image src="/Instagram.svg" alt="Instagram" width={81} height={81} /> },
        style: { background: 'transparent', border: 'none', padding: '0', width: '81px', height: '81px' },
        sourcePosition: Position.Left,
        targetPosition: Position.Left,        
    },
    
]

const initialEdges = [
  // Primary lines to midpoints
    { id: 'e-stream-yt-branch', source: 'streamverse', target: 'yt-branch', type: 'straight', style: { stroke: '#2E2E2D', strokeWidth: 2 }, animated: true, },
    { id: 'e-stream-fb-branch', source: 'streamverse', target: 'fb-branch', type: 'straight', style: { stroke: '#2E2E2D', strokeWidth: 2 }, animated: true, },
    // Phantom to main
    { id: 'e-yt-branch-youtube', source: 'yt-branch', target: 'youtube', type: 'straight', style: { stroke: '#2E2E2D', strokeWidth: 2 }, animated: true, },
    { id: 'e-fb-branch-facebook', source: 'fb-branch', target: 'facebook', type: 'straight', style: { stroke: '#2E2E2D', strokeWidth: 2 }, animated: true, },
    // Secondary branches
    { id: 'e-yt-branch-tiktok', source: 'yt-branch', target: 'tiktok', type: 'smoothstep', style: { stroke: '#2E2E2D', strokeWidth: 2 }, animated: true, },
    { id: 'e-yt-branch-twitch', source: 'yt-branch', target: 'twitch', type: 'smoothstep', style: { stroke: '#2E2E2D', strokeWidth: 2 }, animated: true, },
    { id: 'e-fb-branch-bigo', source: 'fb-branch', target: 'bigo', type: 'smoothstep', style: { stroke: '#2E2E2D', strokeWidth: 2 }, animated: true, },
    { id: 'e-fb-branch-instagram', source: 'fb-branch', target: 'instagram', type: 'smoothstep', style: { stroke: '#2E2E2D', strokeWidth: 2 }, animated: true, },
]

export default function StreamVerseDiagramFlow() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes)
    const [edges, , onEdgesChange] = useEdgesState(initialEdges)

    return (
        <div className="w-full flex justify-center items-center h-[400px] mb-10">
            <div className="w-full max-w-[1200px] h-full bg-transparent  cursor-default">
                <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                proOptions={{ hideAttribution: true }}
                panOnDrag={false}          // 🛑 disables dragging the canvas
                zoomOnScroll={false}       // 🛑 disables zooming with scroll
                zoomOnPinch={false}        // 🛑 disables zoom on touchpad/pinch
                zoomOnDoubleClick={false}  // 🛑 disables double-click zoom
                nodesDraggable={false}     // 🛑 disables dragging nodes
                nodesConnectable={false}   // 🛑 disables connecting nodes
                elementsSelectable={false} 
                />
            </div>
        </div>
    )
}
