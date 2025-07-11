'use client';

import React from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    MarkerType,
    Position,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: 'center',
        position: { x: 600, y: 150 },
        data: {
        label: <img src="/StreamVerse.svg" alt="StreamVERSE" className="w-full h-full drop-shadow-[0_0_10px_#c6ff00]" />,
        },
        sourcePosition: Position.Left,
        targetPosition: Position.Left,
        style: { background: 'transparent', border: 'none', padding: '0' }
    },
    {
        id: 'left',
        position: { x: 0, y: 150 },
        data: {
        label: <img src="/YT.svg" alt="YouTube"  className="w-full h-full" />,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Right,
        style: { background: 'transparent', border: 'none', padding: '0', margin: '0' }
    },
    {
        id: 'top-left',
        position: { x: 150, y: 0 },
        data: {
        label: <img src="/Twitch.svg" alt="Twitch"  className="w-full h-full"  />,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Right,
        style: { background: 'transparent', border: 'none', padding: '0' }
    },
    {
        id: 'bottom-left',
        position: { x: 200, y: 250 },
        data: {
        label: <img src="/Tiktok.svg" alt="Tiktok"  className="w-full h-full"  />,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Right,
        style: { background: 'transparent', border: 'none', padding: '0' }
    },
    {
        id: 'right',
        position: { x: 1200, y: 150 },
        data: {
        label: <img src="/Facebook.svg" alt="Facebook"  className="w-full h-full"  />,
        },
        sourcePosition: Position.Left,
        targetPosition: Position.Left,
        style: { background: 'transparent', border: 'none', padding: '0' }
    },
    {
        id: 'top-right',
        position: { x: 1050, y: 0 },
        data: {
        label: <img src="/Bigo.svg" alt="Bigo"  className="w-full h-full"  />,
        },
        sourcePosition: Position.Left,
        targetPosition: Position.Left,
        style: { background: 'transparent', border: 'none', padding: '0' }
    },
    {
        id: 'bottom-right',
        position: { x: 1000, y: 250 },
        data: {
        label: <img src="/Instagram.svg" alt="Instagram"  className="w-full h-full"  />,
        },
        sourcePosition: Position.Left,
        targetPosition: Position.Left,
        style: { background: 'transparent', border: 'none', padding: '0' }
    },
];

const initialEdges = [
    {
        id: 'e1',
        source: 'center',
        target: 'left',
        type: 'straight',
        style: { stroke: '#C6FF00', strokeWidth: 2 }
    },
    {
        id: 'e2',
        source: 'center',
        target: 'right',
        type: 'straight',
        style: { stroke: '#C6FF00', strokeWidth: 2 }
    },
    {
        id: 'e3',
        source: 'center',
        target: 'top-right',
        type: 'straight',
        style: { stroke: '#C6FF00', strokeWidth: 2 }
    },
    {
        id: 'e4',
        source: 'center',
        target: 'bottom-right',
        type: 'straight',
        style: { stroke: '#C6FF00', strokeWidth: 2 }
    },
        {
        id: 'e5',
        source: 'center',
        target: 'top-left',
        type: 'straight',
        style: { stroke: '#C6FF00', strokeWidth: 2 }
    },
    {
        id: 'e-tiktok-streamverse',
        source: 'bottom-left',
        target: 'center',
        type: 'straight',
        style: { stroke: '#C6FF00', strokeWidth: 2 }
    },
];

export default function StreamVerseDiagramFlow() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div className="w-full flex justify-center items-center h-[302px] mb-10">
            <div className="w-full max-w-[1200px] h-[400px] bg-transparent">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    fitView
                    proOptions={{ hideAttribution: true }}
                />
            </div>
        </div>
    );
}