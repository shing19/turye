# 兔儿爷画卷艺术生成 Generative art of Turye 
1. 在web服务环境下运行 `index.html`
2. 生成的兔儿爷会被自动下载保存
3. 刷新页面生成新的兔儿爷

---

## 运行自动保存脚本

```
python -m venv vnev
source venv/bin/activate
pip install -r requirements.txt
mkdir images
python -m http.server
python savePicture.py  
```
