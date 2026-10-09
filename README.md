# Kalon — client demo (final)

Dark industrial site for **Kalon Engineering & Trading PLC**. Soft stock-request flow (not fake checkout).

## Show them

```bash
cd kalon && python3 -m http.server 5173
```

Open **http://localhost:5173** → hard refresh (Ctrl/Cmd+Shift+R).

### Demo script (2 minutes)

1. Hero: “industrial & electrical partner” + orange CTA  
2. Catalog → filter / search → **Add to list**  
3. Open **My list** → fill name/phone → **Send request**  
4. Show confirmation screen with **request ID** + WhatsApp  
5. Toggle **EN / አማ**  
6. Find us: address, hours, call, maps  

### Model

Customer builds a list → sends a **stock request** → gets an ID → Kalon confirms price & pickup on WhatsApp. No payment on the site.
