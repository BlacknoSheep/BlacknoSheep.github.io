const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=,./<>?;':\"[]{}\\|`~";
const fontSize = 10;
// 绘制代码雨
function rain(canvas, onFinish) {
    const ctx = canvas.getContext("2d");
    canvas.width = screen.availWidth;
    canvas.height = screen.availHeight;
    // 字母纵坐标
    const ys = Array.apply(null, Array(Math.ceil(canvas.width / fontSize))).map(() => {
        return -Math.random() * fontSize * 25;
    });
    let textFinished = false;
    let restColor = 256; // 最后一行剩余颜色值
    let opacity = 0.06;
    function doRain() {
        // 绘制幕布，实现渐变效果
        ctx.fillStyle = `rgba(0,0,0,${opacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 绘制文字
        if (!textFinished) {
            ctx.fillStyle = "#0f0";
            ctx.font = `${fontSize}px`;
            textFinished = true;
            ys.forEach((y, index) => {
                if (-fontSize < y && y < canvas.height) {
                    ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, y);
                    textFinished = false;
                }
                ys[index] += 10;
            });
        }
        else if (restColor > 25) {
            restColor *= 1 - opacity;
        }
        else {
            // 最后一行已变黑，结束动画
            return true;
        }
        return false;
    }
    const stopHandle = setInterval(() => {
        if (doRain()) {
            // 动画结束
            clearInterval(stopHandle);
            // 删除画布
            canvas.remove();
            // 执行回调
            onFinish();
        }
    }, 40);
}
export default rain;
