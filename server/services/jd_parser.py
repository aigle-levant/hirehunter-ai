# modules
import spacy # nlp lesgooo
from collections import Counter # we're gonna count

nlp = spacy.load("en_core_web_sm", disable=["parser", "ner"])

# get the top 10 keywords from jd

def extract_keywords_multi_jds(jds: list[str], top_n_keywords: int = 10):
    docs = list(nlp.pipe([jd.lower() for jd in jds]))
    results = []
    for jd, doc in zip(jds, docs):
        words = [t.text for t in doc if t.pos_ in ["NOUN", "PROPN"] and len(t.text) > 2]
        freq = Counter(words)
        results.append({
            "jd": jd,
            "keywords": [w for w, _ in freq.most_common(top_n_keywords)]
        })
    return results