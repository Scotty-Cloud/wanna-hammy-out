<%- include('../partials/html-head') %>
<%- include('../partials/nav') %>

<section>
    <h1>HAMMYS!</h1>
    <% if (user) { %>
    <h2>Gib New HAMMYS!</h2>
    <form action="/breeds" method="POST"></form>
    <label>
      Name:
      <input type="text" name="name" autocomplete="off">
    </label>
    <label>
      Aggressive?
      <input type="checkbox" name="aggressive"
    </label>
    <button type="submit">Add Hammy</button>
    </form>
    <ul>
      breeds.forEach(breed => { %> 
      <li>hamp <%= breed.name %> is <%= breed.aggressive ? 'not aggressive' : 'very aggressive' %></li> 
      <% }) %>
    </ul>
</section>

<%- include('../partials/footer') %>