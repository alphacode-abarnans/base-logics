import fs from 'fs';
import path from 'path';
import https from 'https';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const name = searchParams.get("name");
    const url = `https://dev-json.apptimus.lk/${name}.json`;
    const publicFolder = path.join(process.cwd(), 'public');
    const filePath = path.join(publicFolder, 'runtime-theme.json');

    return new Promise<NextResponse>((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                try {
                    fs.writeFileSync(filePath, data);
                    resolve(NextResponse.json(JSON.parse(data)));
                } catch (err) {
                    reject(err);
                }
            });
        }).on('error', (err) => {
            reject(err);
            
        });
    }).catch((err) => {
        return NextResponse.json({ error: 'Error downloading the file', details: err.message }, { status: 500 });
    });
}
