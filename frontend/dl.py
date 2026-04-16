import os, urllib.request

req_headers = {'User-Agent': 'Mozilla/5.0'}
heroes_names = [('thevar', 'Muthuramalinga Thevar'), ('kattabomman', 'Veera Pandya Kattabomman'), ('maruthu', 'Maruthu Pandiyars'), ('velu', 'Velu Nachiyar'), ('kaladi', 'Periya Kaladi'), ('bharati', 'Subramania Bharati'), ('puli', 'Puli Thevar'), ('voc', 'V O Chidambaram')]
for i in range(9, 39): 
    heroes_names.append((f'hero_{i}', f'Freedom Fighter {i}'))

os.makedirs('images', exist_ok=True)

for file_id, name in heroes_names:
    url = f'https://ui-avatars.com/api/?name={name.replace(" ", "+")}&background=random&color=fff&size=400&font-size=0.4'
    req = urllib.request.Request(url, headers=req_headers)
    print(f"Downloading {file_id}...")
    try:
        with urllib.request.urlopen(req) as r, open(f'images/{file_id}.png', 'wb') as f:
            f.write(r.read())
    except Exception as e:
        print(f"Failed {file_id}: {e}")

print('Images Downloaded Successfully')
