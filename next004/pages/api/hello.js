export default function handler(raq, res) {
    // ステータスコード200、JSON形式で返戻する
    res.status(200).json({text: 'hello'});
}