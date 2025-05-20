import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.NEXT_PUBLIC_API_PUBLIC_KEY || undefined;
const API_URL = process.env.NEXT_PUBLIC_API_URL || undefined;

export async function GET(req: NextRequest) {
    if (!API_KEY) {
        return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
    }

    const queryParams = new URLSearchParams();
    queryParams.append('format', 'json')
    queryParams.append('api_key', API_KEY)
    // queryParams.append('field_list', 'id,name,gender,origin,publisher')
    let endpoint = '';
    for (const [key, value] of req.nextUrl.searchParams.entries()) {
        if (key === 'endpoint') {
            endpoint = value;
            continue;
        }
        queryParams.append(key, value);
    }

    try {
        const URL = `${API_URL}${endpoint}?${queryParams.toString()}`;
        const fetchedData = await axios.get(URL)
        const response = fetchedData.data;
        return NextResponse.json({ response }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: 'API Error', message: err }, { status: 500 });
    }

}