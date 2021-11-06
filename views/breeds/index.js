<%- include('../partials/html-head') %>
<%- include('../partials/nav') %>

<section>
    <h1>HAMMYS!</h1>
    <h2>ALL DA HAMMYS!</h2>
    <ul>
      breeds.forEach(breed => { %> 
      <li>hamp <%= breed.name %> is <%= breed.aggressive ? 'not aggressive' : 'very aggressive' %></li> 
      <% }) %>
    </ul>
</section>

<%- include('../partials/footer') %>